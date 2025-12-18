// Simple Unit Testing Library (Mini-Jest)
const TestSuite = (() => {
    let results = [];

    function describe(name, fn) {
        console.group(name);
        try {
            fn();
        } catch (e) {
            console.error(e);
        }
        console.groupEnd();
    }

    function it(name, fn) {
        try {
            fn();
            console.log(`%c✓ ${name}`, 'color: green');
            results.push({ name, status: 'pass' });
        } catch (e) {
            console.error(`%c✗ ${name}`, 'color: red');
            console.error(e);
            results.push({ name, status: 'fail', error: e });
        }
    }

    function expect(actual) {
        return {
            toBe: (expected) => {
                if (actual !== expected) {
                    throw new Error(`Expected ${expected}, but got ${actual}`);
                }
            },
            toEqual: (expected) => {
                if (JSON.stringify(actual) !== JSON.stringify(expected)) {
                    throw new Error(`Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(actual)}`);
                }
            },
            toBeTruthy: () => {
                if (!actual) throw new Error(`Expected ${actual} to be truthy`);
            },
            toBeFalsy: () => {
                if (actual) throw new Error(`Expected ${actual} to be falsy`);
            },
            toContain: (item) => {
                if (!actual.includes(item)) throw new Error(`Expected ${actual} to contain ${item}`);
            }
        };
    }

    // UI Reporter
    function report() {
        const passed = results.filter(r => r.status === 'pass').length;
        const failed = results.filter(r => r.status === 'fail').length;
        const total = results.length;

        const summary = document.getElementById('test-summary');
        const list = document.getElementById('test-list');

        if (summary) {
            summary.innerHTML = `
                <div class="summary-card ${failed > 0 ? 'fail' : 'pass'}">
                    <h2>Test Results</h2>
                    <p>Total: <strong>${total}</strong></p>
                    <p class="text-success">Passed: <strong>${passed}</strong></p>
                    <p class="text-danger">Failed: <strong>${failed}</strong></p>
                </div>
            `;
        }

        if (list) {
            list.innerHTML = results.map(r => `
                <li class="test-item ${r.status}">
                    <span class="icon">${r.status === 'pass' ? '✓' : '✗'}</span>
                    <span class="name">${r.name}</span>
                    ${r.error ? `<pre class="error">${r.error.message}</pre>` : ''}
                </li>
            `).join('');
        }
    }

    // Expose globals
    window.describe = describe;
    window.it = it;
    window.expect = expect;
    window.runTests = report;
})();
