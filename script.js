const busData = [
    { "operator_name": "DubeyJi Travels", "route_from": "Bhopal", "route_to": "Shivpuri", "via": "Biaora • Guna", "distance_km": 320, "departure_time": 1764914400000, "arrival_time": "14:00", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Bhopal–Shivpuri Via Biaora (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Bhopal", "route_to": "Shivpuri", "via": "Biaora • Guna", "distance_km": 320, "departure_time": 1764923400000, "arrival_time": "16:40", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Bhopal–Shivpuri Via Biaora (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Bhopal", "route_to": "Shivpuri", "via": "Biaora • Guna", "distance_km": 320, "departure_time": 1764936000000, "arrival_time": "20:15", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Bhopal–Shivpuri Via Biaora (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Bhopal", "route_to": "Shivpuri", "via": "Biaora • Guna", "distance_km": 320, "departure_time": 1764948600000, "arrival_time": "23:35", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Bhopal–Shivpuri Via Biaora (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Bhopal", "route_to": "Shivpuri", "via": "Biaora • Guna", "distance_km": 320, "departure_time": 1764957600000, "arrival_time": "02:00 (+1)", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Bhopal–Shivpuri Via Biaora (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Bhopal", "route_to": "Shivpuri", "via": "Biaora • Guna", "distance_km": 320, "departure_time": 1764972000000, "arrival_time": "05:50 (+1)", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Bhopal–Shivpuri Via Biaora (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Datia", "route_to": "Shivpuri", "via": "Dabra", "distance_km": 95, "departure_time": 1764914400000, "arrival_time": "08:10", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Datia–Shivpuri Via Dabra (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Datia", "route_to": "Shivpuri", "via": "Dabra", "distance_km": 95, "departure_time": 1764923400000, "arrival_time": "10:50", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Datia–Shivpuri Via Dabra (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Datia", "route_to": "Shivpuri", "via": "Dabra", "distance_km": 95, "departure_time": 1764936000000, "arrival_time": "14:25", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Datia–Shivpuri Via Dabra (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Datia", "route_to": "Shivpuri", "via": "Dabra", "distance_km": 95, "departure_time": 1764948600000, "arrival_time": "17:45", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Datia–Shivpuri Via Dabra (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Datia", "route_to": "Shivpuri", "via": "Dabra", "distance_km": 95, "departure_time": 1764957600000, "arrival_time": "20:10", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Datia–Shivpuri Via Dabra (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Datia", "route_to": "Shivpuri", "via": "Dabra", "distance_km": 95, "departure_time": 1764972000000, "arrival_time": "00:00 (+1)", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Datia–Shivpuri Via Dabra (AC Seater 2+2)" }, { "operator_name": "Sharad Travels", "route_from": "Guna", "route_to": "Shivpuri", "via": "Raghogarh • Badarwas", "distance_km": 103, "departure_time": 1764914400000, "arrival_time": "08:15", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Guna–Shivpuri Via Raghogarh (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Guna", "route_to": "Shivpuri", "via": "Raghogarh • Badarwas", "distance_km": 103, "departure_time": 1764923400000, "arrival_time": "10:55", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Guna–Shivpuri Via Raghogarh (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Guna", "route_to": "Shivpuri", "via": "Raghogarh • Badarwas", "distance_km": 103, "departure_time": 1764936000000, "arrival_time": "14:30", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Guna–Shivpuri Via Raghogarh (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Guna", "route_to": "Shivpuri", "via": "Raghogarh • Badarwas", "distance_km": 103, "departure_time": 1764948600000, "arrival_time": "17:50", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Guna–Shivpuri Via Raghogarh (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Guna", "route_to": "Shivpuri", "via": "Raghogarh • Badarwas", "distance_km": 103, "departure_time": 1764957600000, "arrival_time": "20:15", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Guna–Shivpuri Via Raghogarh (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Guna", "route_to": "Shivpuri", "via": "Raghogarh • Badarwas", "distance_km": 103, "departure_time": 1764972000000, "arrival_time": "00:05 (+1)", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Guna–Shivpuri Via Raghogarh (Non-AC Sleeper 2+1)" }, { "operator_name": "Hans Travels", "route_from": "Gwalior", "route_to": "Shivpuri", "via": "Mohna • Kolaras", "distance_km": 115, "departure_time": 1764914400000, "arrival_time": "08:30", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Gwalior–Shivpuri Via Mohna (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Gwalior", "route_to": "Shivpuri", "via": "Mohna • Kolaras", "distance_km": 115, "departure_time": 1764923400000, "arrival_time": "11:10", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Gwalior–Shivpuri Via Mohna (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Gwalior", "route_to": "Shivpuri", "via": "Mohna • Kolaras", "distance_km": 115, "departure_time": 1764936000000, "arrival_time": "14:45", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Gwalior–Shivpuri Via Mohna (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Gwalior", "route_to": "Shivpuri", "via": "Mohna • Kolaras", "distance_km": 115, "departure_time": 1764948600000, "arrival_time": "18:05", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Gwalior–Shivpuri Via Mohna (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Gwalior", "route_to": "Shivpuri", "via": "Mohna • Kolaras", "distance_km": 115, "departure_time": 1764957600000, "arrival_time": "20:30", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Gwalior–Shivpuri Via Mohna (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Gwalior", "route_to": "Shivpuri", "via": "Mohna • Kolaras", "distance_km": 115, "departure_time": 1764972000000, "arrival_time": "00:20 (+1)", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Gwalior–Shivpuri Via Mohna (AC Sleeper 2+1)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Indore", "route_to": "Shivpuri", "via": "Dewas • Guna", "distance_km": 360, "departure_time": 1764914400000, "arrival_time": "15:00", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Indore–Shivpuri Via Dewas (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Indore", "route_to": "Shivpuri", "via": "Dewas • Guna", "distance_km": 360, "departure_time": 1764923400000, "arrival_time": "17:40", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Indore–Shivpuri Via Dewas (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Indore", "route_to": "Shivpuri", "via": "Dewas • Guna", "distance_km": 360, "departure_time": 1764936000000, "arrival_time": "21:15", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Indore–Shivpuri Via Dewas (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Indore", "route_to": "Shivpuri", "via": "Dewas • Guna", "distance_km": 360, "departure_time": 1764948600000, "arrival_time": "00:35 (+1)", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Indore–Shivpuri Via Dewas (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Indore", "route_to": "Shivpuri", "via": "Dewas • Guna", "distance_km": 360, "departure_time": 1764957600000, "arrival_time": "03:00 (+1)", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Indore–Shivpuri Via Dewas (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Indore", "route_to": "Shivpuri", "via": "Dewas • Guna", "distance_km": 360, "departure_time": 1764972000000, "arrival_time": "06:50 (+1)", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Indore–Shivpuri Via Dewas (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Jaipur", "route_to": "Shivpuri", "via": "Dausa • Lalsot", "distance_km": 330, "departure_time": 1764914400000, "arrival_time": "14:00", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Jaipur–Shivpuri Via Dausa (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Jaipur", "route_to": "Shivpuri", "via": "Dausa • Lalsot", "distance_km": 330, "departure_time": 1764923400000, "arrival_time": "16:40", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Jaipur–Shivpuri Via Dausa (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Jaipur", "route_to": "Shivpuri", "via": "Dausa • Lalsot", "distance_km": 330, "departure_time": 1764936000000, "arrival_time": "20:15", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Jaipur–Shivpuri Via Dausa (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Jaipur", "route_to": "Shivpuri", "via": "Dausa • Lalsot", "distance_km": 330, "departure_time": 1764948600000, "arrival_time": "23:35", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Jaipur–Shivpuri Via Dausa (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Jaipur", "route_to": "Shivpuri", "via": "Dausa • Lalsot", "distance_km": 330, "departure_time": 1764957600000, "arrival_time": "02:00 (+1)", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Jaipur–Shivpuri Via Dausa (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Jaipur", "route_to": "Shivpuri", "via": "Dausa • Lalsot", "distance_km": 330, "departure_time": 1764972000000, "arrival_time": "05:50 (+1)", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Jaipur–Shivpuri Via Dausa (Non-AC Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Jhansi", "route_to": "Shivpuri", "via": "Dabra • Datia", "distance_km": 100, "departure_time": 1764914400000, "arrival_time": "08:20", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Jhansi–Shivpuri Via Dabra (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Jhansi", "route_to": "Shivpuri", "via": "Dabra • Datia", "distance_km": 100, "departure_time": 1764923400000, "arrival_time": "11:00", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Jhansi–Shivpuri Via Dabra (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Jhansi", "route_to": "Shivpuri", "via": "Dabra • Datia", "distance_km": 100, "departure_time": 1764936000000, "arrival_time": "14:35", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Jhansi–Shivpuri Via Dabra (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Jhansi", "route_to": "Shivpuri", "via": "Dabra • Datia", "distance_km": 100, "departure_time": 1764948600000, "arrival_time": "17:55", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Jhansi–Shivpuri Via Dabra (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Jhansi", "route_to": "Shivpuri", "via": "Dabra • Datia", "distance_km": 100, "departure_time": 1764957600000, "arrival_time": "20:20", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Jhansi–Shivpuri Via Dabra (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Jhansi", "route_to": "Shivpuri", "via": "Dabra • Datia", "distance_km": 100, "departure_time": 1764972000000, "arrival_time": "00:10 (+1)", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Jhansi–Shivpuri Via Dabra (Express Seater 3+2)" }, { "operator_name": "Hans Travels", "route_from": "Kota", "route_to": "Shivpuri", "via": "Baran", "distance_km": 260, "departure_time": 1764914400000, "arrival_time": "12:00", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Kota–Shivpuri Via Baran (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Kota", "route_to": "Shivpuri", "via": "Baran", "distance_km": 260, "departure_time": 1764923400000, "arrival_time": "14:40", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Kota–Shivpuri Via Baran (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Kota", "route_to": "Shivpuri", "via": "Baran", "distance_km": 260, "departure_time": 1764936000000, "arrival_time": "18:15", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Kota–Shivpuri Via Baran (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Kota", "route_to": "Shivpuri", "via": "Baran", "distance_km": 260, "departure_time": 1764948600000, "arrival_time": "21:35", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Kota–Shivpuri Via Baran (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Kota", "route_to": "Shivpuri", "via": "Baran", "distance_km": 260, "departure_time": 1764957600000, "arrival_time": "00:00 (+1)", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Kota–Shivpuri Via Baran (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Kota", "route_to": "Shivpuri", "via": "Baran", "distance_km": 260, "departure_time": 1764972000000, "arrival_time": "03:50 (+1)", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Kota–Shivpuri Via Baran (AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Sheopur", "route_to": "Shivpuri", "via": "Pohri • Karahal", "distance_km": 120, "departure_time": 1764914400000, "arrival_time": "09:20", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Sheopur–Shivpuri Via Pohri (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Sheopur", "route_to": "Shivpuri", "via": "Pohri • Karahal", "distance_km": 120, "departure_time": 1764923400000, "arrival_time": "12:00", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Sheopur–Shivpuri Via Pohri (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Sheopur", "route_to": "Shivpuri", "via": "Pohri • Karahal", "distance_km": 120, "departure_time": 1764936000000, "arrival_time": "15:35", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Sheopur–Shivpuri Via Pohri (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Sheopur", "route_to": "Shivpuri", "via": "Pohri • Karahal", "distance_km": 120, "departure_time": 1764948600000, "arrival_time": "18:55", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Sheopur–Shivpuri Via Pohri (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Sheopur", "route_to": "Shivpuri", "via": "Pohri • Karahal", "distance_km": 120, "departure_time": 1764957600000, "arrival_time": "21:20", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Sheopur–Shivpuri Via Pohri (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Sheopur", "route_to": "Shivpuri", "via": "Pohri • Karahal", "distance_km": 120, "departure_time": 1764972000000, "arrival_time": "01:10 (+1)", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Sheopur–Shivpuri Via Pohri (AC Seater 2+2)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Shivpuri", "route_to": "Bhopal", "via": "Guna • Biaora", "distance_km": 320, "departure_time": 1764914400000, "arrival_time": "14:00", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Shivpuri–Bhopal Via Guna (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Shivpuri", "route_to": "Bhopal", "via": "Guna • Biaora", "distance_km": 320, "departure_time": 1764923400000, "arrival_time": "16:40", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Shivpuri–Bhopal Via Guna (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Shivpuri", "route_to": "Bhopal", "via": "Guna • Biaora", "distance_km": 320, "departure_time": 1764936000000, "arrival_time": "20:15", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Shivpuri–Bhopal Via Guna (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Shivpuri", "route_to": "Bhopal", "via": "Guna • Biaora", "distance_km": 320, "departure_time": 1764948600000, "arrival_time": "23:35", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Shivpuri–Bhopal Via Guna (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Shivpuri", "route_to": "Bhopal", "via": "Guna • Biaora", "distance_km": 320, "departure_time": 1764957600000, "arrival_time": "02:00 (+1)", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Shivpuri–Bhopal Via Guna (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Shivpuri", "route_to": "Bhopal", "via": "Guna • Biaora", "distance_km": 320, "departure_time": 1764972000000, "arrival_time": "05:50 (+1)", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Shivpuri–Bhopal Via Guna (Express Seater 3+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Shivpuri", "route_to": "Datia", "via": "Dabra", "distance_km": 95, "departure_time": 1764914400000, "arrival_time": "08:10", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Shivpuri–Datia Via Dabra (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Shivpuri", "route_to": "Datia", "via": "Dabra", "distance_km": 95, "departure_time": 1764923400000, "arrival_time": "10:50", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Shivpuri–Datia Via Dabra (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Shivpuri", "route_to": "Datia", "via": "Dabra", "distance_km": 95, "departure_time": 1764936000000, "arrival_time": "14:25", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Shivpuri–Datia Via Dabra (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Shivpuri", "route_to": "Datia", "via": "Dabra", "distance_km": 95, "departure_time": 1764948600000, "arrival_time": "17:45", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Shivpuri–Datia Via Dabra (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Shivpuri", "route_to": "Datia", "via": "Dabra", "distance_km": 95, "departure_time": 1764957600000, "arrival_time": "20:10", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Shivpuri–Datia Via Dabra (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Shivpuri", "route_to": "Datia", "via": "Dabra", "distance_km": 95, "departure_time": 1764972000000, "arrival_time": "00:00 (+1)", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Shivpuri–Datia Via Dabra (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Shivpuri", "route_to": "Guna", "via": "Badarwas • Raghogarh", "distance_km": 103, "departure_time": 1764914400000, "arrival_time": "08:15", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Shivpuri–Guna Via Badarwas (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Shivpuri", "route_to": "Guna", "via": "Badarwas • Raghogarh", "distance_km": 103, "departure_time": 1764923400000, "arrival_time": "10:55", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Shivpuri–Guna Via Badarwas (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Shivpuri", "route_to": "Guna", "via": "Badarwas • Raghogarh", "distance_km": 103, "departure_time": 1764936000000, "arrival_time": "14:30", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Shivpuri–Guna Via Badarwas (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Shivpuri", "route_to": "Guna", "via": "Badarwas • Raghogarh", "distance_km": 103, "departure_time": 1764948600000, "arrival_time": "17:50", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Shivpuri–Guna Via Badarwas (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Shivpuri", "route_to": "Guna", "via": "Badarwas • Raghogarh", "distance_km": 103, "departure_time": 1764957600000, "arrival_time": "20:15", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Shivpuri–Guna Via Badarwas (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Shivpuri", "route_to": "Guna", "via": "Badarwas • Raghogarh", "distance_km": 103, "departure_time": 1764972000000, "arrival_time": "00:05 (+1)", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Shivpuri–Guna Via Badarwas (AC Seater 2+2)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Shivpuri", "route_to": "Gwalior", "via": "Kolaras • Mohna", "distance_km": 115, "departure_time": 1764914400000, "arrival_time": "08:30", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Shivpuri–Gwalior Via Kolaras (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Shivpuri", "route_to": "Gwalior", "via": "Kolaras • Mohna", "distance_km": 115, "departure_time": 1764923400000, "arrival_time": "11:10", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Shivpuri–Gwalior Via Kolaras (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Shivpuri", "route_to": "Gwalior", "via": "Kolaras • Mohna", "distance_km": 115, "departure_time": 1764936000000, "arrival_time": "14:45", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Shivpuri–Gwalior Via Kolaras (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Shivpuri", "route_to": "Gwalior", "via": "Kolaras • Mohna", "distance_km": 115, "departure_time": 1764948600000, "arrival_time": "18:05", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Shivpuri–Gwalior Via Kolaras (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Shivpuri", "route_to": "Gwalior", "via": "Kolaras • Mohna", "distance_km": 115, "departure_time": 1764957600000, "arrival_time": "20:30", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Shivpuri–Gwalior Via Kolaras (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Shivpuri", "route_to": "Gwalior", "via": "Kolaras • Mohna", "distance_km": 115, "departure_time": 1764972000000, "arrival_time": "00:20 (+1)", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Shivpuri–Gwalior Via Kolaras (AC Seater 2+2)" }, { "operator_name": "Sharad Travels", "route_from": "Shivpuri", "route_to": "Indore", "via": "Guna • Dewas", "distance_km": 360, "departure_time": 1764914400000, "arrival_time": "15:00", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Shivpuri–Indore Via Guna (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Shivpuri", "route_to": "Indore", "via": "Guna • Dewas", "distance_km": 360, "departure_time": 1764923400000, "arrival_time": "17:40", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Shivpuri–Indore Via Guna (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Shivpuri", "route_to": "Indore", "via": "Guna • Dewas", "distance_km": 360, "departure_time": 1764936000000, "arrival_time": "21:15", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Shivpuri–Indore Via Guna (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Shivpuri", "route_to": "Indore", "via": "Guna • Dewas", "distance_km": 360, "departure_time": 1764948600000, "arrival_time": "00:35 (+1)", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Shivpuri–Indore Via Guna (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Shivpuri", "route_to": "Indore", "via": "Guna • Dewas", "distance_km": 360, "departure_time": 1764957600000, "arrival_time": "03:00 (+1)", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Shivpuri–Indore Via Guna (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Shivpuri", "route_to": "Indore", "via": "Guna • Dewas", "distance_km": 360, "departure_time": 1764972000000, "arrival_time": "06:50 (+1)", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Shivpuri–Indore Via Guna (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Shivpuri", "route_to": "Jaipur", "via": "Lalsot • Dausa", "distance_km": 330, "departure_time": 1764914400000, "arrival_time": "14:00", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Shivpuri–Jaipur Via Lalsot (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Shivpuri", "route_to": "Jaipur", "via": "Lalsot • Dausa", "distance_km": 330, "departure_time": 1764923400000, "arrival_time": "16:40", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Shivpuri–Jaipur Via Lalsot (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Shivpuri", "route_to": "Jaipur", "via": "Lalsot • Dausa", "distance_km": 330, "departure_time": 1764936000000, "arrival_time": "20:15", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Shivpuri–Jaipur Via Lalsot (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Shivpuri", "route_to": "Jaipur", "via": "Lalsot • Dausa", "distance_km": 330, "departure_time": 1764948600000, "arrival_time": "23:35", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Shivpuri–Jaipur Via Lalsot (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Shivpuri", "route_to": "Jaipur", "via": "Lalsot • Dausa", "distance_km": 330, "departure_time": 1764957600000, "arrival_time": "02:00 (+1)", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Shivpuri–Jaipur Via Lalsot (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Shivpuri", "route_to": "Jaipur", "via": "Lalsot • Dausa", "distance_km": 330, "departure_time": 1764972000000, "arrival_time": "05:50 (+1)", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Shivpuri–Jaipur Via Lalsot (AC Seater 2+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Shivpuri", "route_to": "Jhansi", "via": "Datia • Dabra", "distance_km": 100, "departure_time": 1764914400000, "arrival_time": "08:20", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Shivpuri–Jhansi Via Datia (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Shivpuri", "route_to": "Jhansi", "via": "Datia • Dabra", "distance_km": 100, "departure_time": 1764923400000, "arrival_time": "11:00", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Shivpuri–Jhansi Via Datia (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Shivpuri", "route_to": "Jhansi", "via": "Datia • Dabra", "distance_km": 100, "departure_time": 1764936000000, "arrival_time": "14:35", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Shivpuri–Jhansi Via Datia (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Shivpuri", "route_to": "Jhansi", "via": "Datia • Dabra", "distance_km": 100, "departure_time": 1764948600000, "arrival_time": "17:55", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Shivpuri–Jhansi Via Datia (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Shivpuri", "route_to": "Jhansi", "via": "Datia • Dabra", "distance_km": 100, "departure_time": 1764957600000, "arrival_time": "20:20", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Shivpuri–Jhansi Via Datia (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Shivpuri", "route_to": "Jhansi", "via": "Datia • Dabra", "distance_km": 100, "departure_time": 1764972000000, "arrival_time": "00:10 (+1)", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Shivpuri–Jhansi Via Datia (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Shivpuri", "route_to": "Kota", "via": "Baran", "distance_km": 260, "departure_time": 1764914400000, "arrival_time": "12:00", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Shivpuri–Kota Via Baran (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Shivpuri", "route_to": "Kota", "via": "Baran", "distance_km": 260, "departure_time": 1764923400000, "arrival_time": "14:40", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Shivpuri–Kota Via Baran (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Shivpuri", "route_to": "Kota", "via": "Baran", "distance_km": 260, "departure_time": 1764936000000, "arrival_time": "18:15", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Shivpuri–Kota Via Baran (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Shivpuri", "route_to": "Kota", "via": "Baran", "distance_km": 260, "departure_time": 1764948600000, "arrival_time": "21:35", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Shivpuri–Kota Via Baran (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Shivpuri", "route_to": "Kota", "via": "Baran", "distance_km": 260, "departure_time": 1764957600000, "arrival_time": "00:00 (+1)", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Shivpuri–Kota Via Baran (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Shivpuri", "route_to": "Kota", "via": "Baran", "distance_km": 260, "departure_time": 1764972000000, "arrival_time": "03:50 (+1)", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Shivpuri–Kota Via Baran (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Shivpuri", "route_to": "Sheopur", "via": "Karahal • Pohri", "distance_km": 120, "departure_time": 1764914400000, "arrival_time": "09:20", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Shivpuri–Sheopur Via Karahal (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Shivpuri", "route_to": "Sheopur", "via": "Karahal • Pohri", "distance_km": 120, "departure_time": 1764923400000, "arrival_time": "12:00", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Shivpuri–Sheopur Via Karahal (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Shivpuri", "route_to": "Sheopur", "via": "Karahal • Pohri", "distance_km": 120, "departure_time": 1764936000000, "arrival_time": "15:35", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Shivpuri–Sheopur Via Karahal (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Shivpuri", "route_to": "Sheopur", "via": "Karahal • Pohri", "distance_km": 120, "departure_time": 1764948600000, "arrival_time": "18:55", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Shivpuri–Sheopur Via Karahal (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Shivpuri", "route_to": "Sheopur", "via": "Karahal • Pohri", "distance_km": 120, "departure_time": 1764957600000, "arrival_time": "21:20", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Shivpuri–Sheopur Via Karahal (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Shivpuri", "route_to": "Sheopur", "via": "Karahal • Pohri", "distance_km": 120, "departure_time": 1764972000000, "arrival_time": "01:10 (+1)", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Shivpuri–Sheopur Via Karahal (AC Sleeper 2+1)" }
];

const placesData = [
    { name: "Madhav National Park", name_hi: "माधव राष्ट्रीय उद्यान", category: "Nature & Wildlife", category_hi: "प्रकृति और वन्यजीव", area: "Near Shivpuri", area_hi: "शिवपुरी के पास", shortDescription: "National park / tiger reserve with lakes, deer, leopards and rich birdlife.", shortDescription_hi: "नील गाय, तेंदुए और पक्षियों से समृद्ध राष्ट्रीय उद्यान।", tags: ["wildlife", "tiger-reserve", "safari", "birding", "family-outing"] },
    { name: "Sakhya Sagar Lake", name_hi: "साख्य सागर झील", category: "Lake", category_hi: "झील", area: "Edge of Madhav National Park", area_hi: "माधव नेशनल पार्क के पास", shortDescription: "Scenic lake and Ramsar site, known for crocodiles, birds and sunset views.", shortDescription_hi: "मगरमच्छ और पक्षियों के लिए प्रसिद्ध सुंदर झील।", tags: ["lake", "sunset", "boating", "bird-watching"] },
    { name: "Bhadaiya Kund", name_hi: "भदैया कुंड", category: "Waterfall / Spring", category_hi: "झरना / कुंड", area: "Outskirts of Shivpuri", area_hi: "शिवपुरी बाहरी क्षेत्र", shortDescription: "Natural spring and small waterfall, popular local picnic spot.", shortDescription_hi: "प्राकृतिक झरना, लोकप्रिय पिकनिक स्थल।", tags: ["waterfall", "picnic", "monsoon-spot", "nature"] },
    { name: "Bhoora Khon Waterfall", name_hi: "भूरा खो झरना", category: "Waterfall", category_hi: "झरना", area: "Near Shivpuri (forest side)", area_hi: "शिवपुरी के पास (जंगल)", shortDescription: "Tall seasonal waterfall with greenery and a small Shiva temple nearby.", shortDescription_hi: "हरियाली और शिव मंदिर के पास मौसमी झरना।", tags: ["waterfall", "photography", "picnic", "offbeat"] },
    { name: "Motisagar Talab Viewpoint", name_hi: "मोतीसागर तालाब व्यूपॉइंट", category: "Lake / Viewpoint", category_hi: "झील / नज़ारा", area: "Shivpuri town", area_hi: "शिवपुरी शहर", shortDescription: "Quiet lake with viewpoint, good for evening walk and sunset.", shortDescription_hi: "शाम की सैर और सूर्यास्त के लिए शांत झील।", tags: ["lake", "sunset", "evening-walk", "relax"] },
    { name: "Royal Scindia Chhatris", name_hi: "सिंधिया छत्री", category: "Heritage Monument", category_hi: "स्मारक", area: "Shivpuri town", area_hi: "शिवपुरी शहर", shortDescription: "White marble royal cenotaphs with intricate carving and gardens.", shortDescription_hi: "सफेद संगमरमर की शाही छतरियां और उद्यान।", tags: ["heritage", "architecture", "photography", "evening-visit"] },
    { name: "Madhav Vilas Palace", name_hi: "माधव विलास पैलेस", category: "Palace / Heritage", category_hi: "महल / विरासत", area: "Near Madhav National Park", area_hi: "माधव नेशनल पार्क के पास", shortDescription: "Former Scindia summer palace with pink European-style architecture.", shortDescription_hi: "गुलाबी यूरोपीय वास्तुकला वाला सिंधिया ग्रीष्मकालीन महल।", tags: ["palace", "royal", "architecture", "history"] },
    { name: "George Castle", name_hi: "जॉर्ज कैसल", category: "Viewpoint / Heritage", category_hi: "नज़ारा / विरासत", area: "Inside Madhav National Park", area_hi: "माधव नेशनल पार्क के अंदर", shortDescription: "Hilltop hunting lodge with panoramic view of lakes and forest.", shortDescription_hi: "पहाड़ी की चोटी पर स्थित शिकारगाह (लॉज)।", tags: ["viewpoint", "sunset", "heritage", "inside-park"] },
    { name: "Tatya Tope Memorial Park", name_hi: "तात्या टोपे स्मारक पार्क", category: "Memorial / Park", category_hi: "स्मारक / पार्क", area: "Shivpuri", area_hi: "शिवपुरी", shortDescription: "Park and statue dedicated to freedom fighter Tatya Tope.", shortDescription_hi: "स्वतंत्रता सेनानी तात्या टोपे को समर्पित पार्क।", tags: ["freedom-struggle", "park", "history"] },
    { name: "Survaya ki Garhi", name_hi: "सुरवाया की गढ़ी", category: "Fort & Temple Complex", category_hi: "किला और मंदिर परिसर", area: "Near Narwar (~20 km from Shivpuri)", area_hi: "नरवर के पास", shortDescription: "Ruined fort with carved temples, monastery and stepwell.", shortDescription_hi: "नक्काशीदार मंदिरों और बावड़ी वाला पुराना किला।", tags: ["heritage", "temples", "architecture", "day-trip"] },
    { name: "Narwar Fort", name_hi: "नरवर किला", category: "Hill Fort", category_hi: "पहाड़ी किला", area: "Narwar (~40 km from Shivpuri)", area_hi: "नरवर", shortDescription: "Large historic hilltop fort with expansive views.", shortDescription_hi: "विशाल ऐतिहासिक पहाड़ी किला।", tags: ["fort", "history", "viewpoint", "day-trip"] },
    { name: "Siddheshwar Temple", name_hi: "सिद्धेश्वर मंदिर", category: "Temple", category_hi: "मंदिर", area: "Chhatri Road, Shivpuri", area_hi: "छत्री रोड, शिवपुरी", shortDescription: "Important Shiva temple, crowded during Mahashivratri fair.", shortDescription_hi: "महत्वपूर्ण शिव मंदिर।", tags: ["shiv-temple", "mahashivratri", "pilgrimage"] },
    { name: "Banganga", name_hi: "बाणगंगा", category: "Holy Kund", category_hi: "पवित्र कुंड", area: "Near Shivpuri", area_hi: "शिवपुरी के पास", shortDescription: "Sacred water body associated with Siddheshwar and rituals.", shortDescription_hi: "सिद्धेश्वर और अनुष्ठानों से जुड़ा पवित्र जल निकाय।", tags: ["holy-water", "pilgrimage"] },
    { name: "Panihar", name_hi: "पनिहार", category: "Spring / Pilgrimage", category_hi: "झरना / तीर्थ", area: "On road between Gwalior and Shivpuri", area_hi: "ग्वालियर और शिवपुरी के बीच", shortDescription: "Holy springs and ghats used for ritual bathing.", shortDescription_hi: "स्नान के लिए पवित्र झरने और घाट।", tags: ["spring", "bathing-ghat", "religious"] },
    { name: "Madhav Sagar Lake", name_hi: "माधव सागर झील", category: "Lake", category_hi: "झील", area: "Madhav landscape, near Shivpuri", area_hi: "शिवपुरी", shortDescription: "Lake forming part of the park's scenic and wildlife habitat.", shortDescription_hi: "पार्क का सुंदर झील और वन्यजीव आवास।", tags: ["lake", "scenic", "wildlife-habitat"] },
    { name: "Chhatri Road Market", name_hi: "छत्री रोड बाजार", category: "Market / Street", category_hi: "बाजार", area: "Shivpuri town", area_hi: "शिवपुरी शहर", shortDescription: "Busy street with shops, temples and local food stalls.", shortDescription_hi: "दुकानों और स्थानीय भोजन स्टालों वाला व्यस्त बाजार।", tags: ["market", "street-food", "shopping", "evening-walk"] },
    { name: "Jhansi Road Food Belt", name_hi: "झांसी रोड फूड बेल्ट", category: "Market / Food Street", category_hi: "फूड स्ट्रीट", area: "Jhansi Road, Shivpuri", area_hi: "झांसी रोड, शिवपुरी", shortDescription: "Stretch known for Chinese-style street food and small shops.", shortDescription_hi: "चाइनीज स्ट्रीट फूड और छोटी दुकानों के लिए जाना जाता है।", tags: ["street-food", "chinese", "shopping", "local-vibe"] },
    { name: "Circular Road Food Belt", name_hi: "सर्कुलर रोड फूड बेल्ट", category: "Food Street", category_hi: "फूड स्ट्रीट", area: "Circular Road, Shivpuri", area_hi: "सर्कुलर रोड, शिवपुरी", shortDescription: "Cluster of veg and non-veg restaurants and kebab joints.", shortDescription_hi: "शाकाहारी और मांसाहारी रेस्तरां का समूह।", tags: ["restaurants", "street-food", "evening", "local-favourite"] },
    { name: "Kuno National Park", name_hi: "कूनो राष्ट्रीय उद्यान", category: "Nature & Wildlife (Nearby)", category_hi: "वन्यजीव (पास में)", area: "Approx 60–80 km from Shivpuri", area_hi: "शिवपुरी से 60-80 किमी", shortDescription: "Cheetah reintroduction site and wildlife reserve near Shivpuri.", shortDescription_hi: "चीता पुनर्वास स्थल और वन्यजीव अभ्यारण्य।", tags: ["wildlife", "cheetah", "day-trip"] },
    { name: "Datia Palace", name_hi: "दतिया महल", category: "Heritage (Nearby)", category_hi: "विरासत (पास में)", area: "Datia (~100 km from Shivpuri)", area_hi: "दतिया", shortDescription: "Seven-storey palace with Rajput–Mughal architecture.", shortDescription_hi: "राजपूत-मुगल वास्तुकला वाला सात मंजिला महल।", tags: ["heritage", "palace", "day-trip"] }
];

const foodData = [
    { name: "Hotel Sonchiraiya", name_hi: "होटल सोनचिरैया", category: "Restaurant & Family Dining", category_hi: "रेस्तरां और पारिवारिक भोजन", area: "Circular Road, Shivpuri", area_hi: "सर्कुलर रोड, शिवपुरी", shortDescription: "Family restaurant for Chinese and North Indian dishes.", shortDescription_hi: "चाइनीज और उत्तर भारतीय व्यंजनों के लिए पारिवारिक रेस्तरां।", approxPriceForTwo: 500, tags: ["north-indian", "chinese", "family"] },
    { name: "Zayka Restaurant", name_hi: "ज़ायका रेस्तरां", category: "Restaurant & Family Dining", category_hi: "रेस्तरां और पारिवारिक भोजन", area: "Near Gwalior Bypass Circle, Shivpuri", area_hi: "ग्वालियर बाईपास सर्कल के पास", shortDescription: "Punjabi and Chinese food, popular mid-budget family spot.", shortDescription_hi: "पंजाबी और चाइनीज भोजन, लोकप्रिय मिड-बजट फैमिली स्पॉट।", approxPriceForTwo: 300, tags: ["punjabi", "north-indian", "chinese", "family"] },
    { name: "Varun Restaurant Inn", name_hi: "वरुण रेस्तरां इन", category: "Restaurant & Family Dining", category_hi: "रेस्तरां और पारिवारिक भोजन", area: "Nai Ki Bagiya, Hospital Road, Shivpuri", area_hi: "नई की बगिया, हॉस्पिटल रोड", shortDescription: "Chinese and Punjabi options for travellers and locals.", shortDescription_hi: "यात्रियों और स्थानीय लोगों के लिए चाइनीज और पंजाबी विकल्प।", approxPriceForTwo: 350, tags: ["punjabi", "chinese", "family"] },
    { name: "Shivpuri Club Cafe", name_hi: "शिवपुरी क्लब कैफे", category: "Restaurant / Casual Dining", category_hi: "रेस्तरां / कैजुअल डाइनिंग", area: "Main Road, Shivpuri", area_hi: "मेन रोड, शिवपुरी", shortDescription: "Casual dining with mixed menu and good ambience.", shortDescription_hi: "अच्छे माहौल और मिश्रित मेनू के साथ कैजुअल डाइनिंग।", approxPriceForTwo: 600, tags: ["north-indian", "snacks", "family", "friends"] },
    { name: "Galaxy Restaurant", name_hi: "गैलेक्सी रेस्तरां", category: "Multi-cuisine Restaurant", category_hi: "मल्टी-कुजीन रेस्तरां", area: "Shivpuri Locality", area_hi: "शिवपुरी", shortDescription: "South Indian, North Indian and Chinese in family setting.", shortDescription_hi: "पारिवारिक सेटिंग में दक्षिण भारतीय, उत्तर भारतीय और चाइनीज।", approxPriceForTwo: 200, tags: ["south-indian", "north-indian", "chinese", "family"] },
    { name: "Nanii Treats", name_hi: "नानी ट्रीट (Nanii Treats)", category: "Street Food & North Indian", category_hi: "स्ट्रीट फूड और उत्तर भारतीय", area: "Shivpuri", area_hi: "शिवपुरी", shortDescription: "Budget-friendly North Indian meals and snacks.", shortDescription_hi: "बजट के अनुकूल उत्तर भारतीय भोजन और नाश्ता।", approxPriceForTwo: 200, tags: ["street-food", "north-indian", "budget"] },
    { name: "Desi Planet", name_hi: "देसी प्लैनेट", category: "Fast Food & Momos", category_hi: "फास्ट फूड और मोमोज", area: "Shivpuri", area_hi: "शिवपुरी", shortDescription: "Momos and fast food for quick bites.", shortDescription_hi: "क्विक बाइट्स के लिए मोमोज और फास्ट फूड।", approxPriceForTwo: 200, tags: ["fast-food", "momos", "street-food"] },
    { name: "Hotel That Baat", name_hi: "होटल ठाठ बात", category: "Street Food / North Indian", category_hi: "स्ट्रीट फूड / उत्तर भारतीय", area: "Shivpuri", area_hi: "शिवपुरी", shortDescription: "Street-style North Indian dishes and beverages.", shortDescription_hi: "स्ट्रीट-स्टाइल उत्तर भारतीय व्यंजन और पेय।", approxPriceForTwo: 400, tags: ["north-indian", "street-food"] },
    { name: "Manoj Nashta Corner", name_hi: "मनोज नाश्ता कॉर्नर", category: "Street Food & Breakfast", category_hi: "स्ट्रीट फूड और नाश्ता", area: "Shivpuri", area_hi: "शिवपुरी", shortDescription: "Popular for nashta items like poha, kachori and jalebi.", shortDescription_hi: "पोहा, कचौरी और जलेबी जैसे नाश्ते के लिए लोकप्रिय।", approxPriceForTwo: 150, tags: ["breakfast", "street-food", "snacks"] },
    { name: "Shiva's Cafe", name_hi: "शिवा कैफे", category: "Cafe & Restaurant", category_hi: "कैफे और रेस्तरां", area: "Physical College Road, Shivpuri", area_hi: "फिजिकल कॉलेज रोड", shortDescription: "Cafe-style hangout with coffee and snacks.", shortDescription_hi: "कॉफी और नाश्ते के साथ कैफे-स्टाइल हैंगआउट।", approxPriceForTwo: 400, tags: ["cafe", "coffee", "snacks", "college-crowd"] },
    { name: "Hum Tum Aur Chai", name_hi: "हम तुम और चाय", category: "Tea Cafe", category_hi: "टी कैफे", area: "In front of Science College, Kamla Ganj", area_hi: "साइंस कॉलेज के सामने, कमला गंज", shortDescription: "Chai-focused cafe with light snacks.", shortDescription_hi: "हल्के नाश्ते के साथ चाय-केंद्रित कैफे।", approxPriceForTwo: 250, tags: ["chai", "cafe", "snacks"] },
    { name: "MP33 Cafe", name_hi: "MP33 कैफे", category: "Cafe & Fast Food", category_hi: "कैफे और फास्ट फूड", area: "Shivpuri", area_hi: "शिवपुरी", shortDescription: "Urban cafe serving fast food, chaats and cheesy dishes.", shortDescription_hi: "फास्ट फूड, चाट और लजीज व्यंजन परोसने वाला अर्बन कैफे।", approxPriceForTwo: 300, tags: ["cafe", "fast-food", "friends"] },
    { name: "Lakapse Cafe & Lounge", name_hi: "लाकाप्स कैफे और लाउंज", category: "Cafe", category_hi: "कैफे", area: "Shivpuri", area_hi: "शिवपुरी", shortDescription: "Lounge-style cafe for coffee and snacks.", shortDescription_hi: "कॉफी और नाश्ते के लिए लाउंज-स्टाइल कैफे।", approxPriceForTwo: 400, tags: ["cafe", "coffee", "snacks"] },
    { name: "Foodose Cafe", name_hi: "फूडोज़ कैफे", category: "Cafe / Coffeehouse", category_hi: "कैफे / कॉफीहाउस", area: "Shivpuri", area_hi: "शिवपुरी", shortDescription: "Coffeehouse with light cafe menu.", shortDescription_hi: "हल्के कैफे मेनू वाला कॉफीहाउस।", approxPriceForTwo: 350, tags: ["coffee", "cafe", "snacks"] },
    { name: "Suman Bakery", name_hi: "सुमन बेकरी", category: "Bakery & Cake Shop", category_hi: "बेकरी और केक शॉप", area: "Lakshmibai Road / Krishnapuram Colony", area_hi: "लक्ष्मीबाई रोड / कृष्णापुरम कॉलोनी", shortDescription: "Cakes, pastries, pizza and baked snacks.", shortDescription_hi: "केक, पेस्ट्री, पिज्जा और बेक्ड स्नैक्स।", approxPriceForTwo: 300, tags: ["bakery", "cakes", "pastries"] },
    { name: "Mahakal Bakery", name_hi: "महाकाल बेकरी", category: "Bakery & Cake Shop", category_hi: "बेकरी और केक शॉप", area: "Ward 26, Mela Ground, Jawahar Colony", area_hi: "जवाहर कॉलोनी", shortDescription: "Local bakery known for fresh morning products.", shortDescription_hi: "ताजा सुबह के उत्पादों के लिए जानी जाने वाली स्थानीय बेकरी।", approxPriceForTwo: 250, tags: ["bakery", "cakes", "snacks"] },
    { name: "Mahadev Bakery", name_hi: "महादेव बेकरी", category: "Bakery & Cake Shop", category_hi: "बेकरी और केक शॉप", area: "Indira Colony, Shivpuri", area_hi: "इंदिरा कॉलोनी", shortDescription: "Neighbourhood bakery for cakes and baked goods.", shortDescription_hi: "केक और बेक्ड सामानों के लिए पड़ोस की बेकरी।", approxPriceForTwo: 250, tags: ["bakery", "cakes"] },
    { name: "Kapil Juice Store", name_hi: "कपिल जूस स्टोर", category: "Juice & Shakes", category_hi: "जूस और शेक", area: "Shivpuri", area_hi: "शिवपुरी", shortDescription: "Fresh fruit juices and milkshakes.", shortDescription_hi: "ताजे फलों के रस और मिल्कशेक।", approxPriceForTwo: 200, tags: ["juice", "shakes", "cold-drinks"] }
];



const cityTranslations = {
    "Bhopal": "भोपाल", "Shivpuri": "शिवपुरी", "Guna": "गुना", "Datia": "दतिया",
    "Gwalior": "ग्वालियर", "Indore": "इंदौर", "Jaipur": "जयपुर", "Jhansi": "झांसी",
    "Kota": "कोटा", "Sheopur": "श्योपुर", "Biaora": "ब्यावरा", "Dewas": "देवास",
    "Raghogarh": "राघोगढ़", "Badarwas": "बदरवास", "Dabra": "डबरा", "Mohna": "मोहना",
    "Kolaras": "कोलारस", "Dausa": "दौसा", "Lalsot": "लालसोट", "Pohri": "पोहरी",
    "Karahal": "कराहल", "Baran": "बारां"
};

const busTypeTranslations = {
    "AC Sleeper 2+1": "एसी स्लीपर 2+1",
    "AC Seater 2+2": "एसी सीटर 2+2",
    "Non-AC Sleeper 2+1": "नॉन-एसी स्लीपर 2+1",
    "Express Seater 3+2": "एक्सप्रेस सीटर 3+2",
    "Volvo B11R Sleeper 2+1": "वोल्वो B11R स्लीपर 2+1"
};

const grid = document.getElementById('schedule-grid');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const filterFrom = document.getElementById('filter-from');
const filterTo = document.getElementById('filter-to');
const filterTime = document.getElementById('filter-time');
const resetBtn = document.getElementById('reset-btn');

function formatTime(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZone: 'UTC'
    });
}

function formatTimeString(timeStr) {
    const [time, modifier] = timeStr.split(' ');
    let [hours, minutes] = time.split(':');
    hours = parseInt(hours);

    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;

    let formatted = `${hours}:${minutes} ${ampm}`;
    if (modifier) {
        formatted += ` ${modifier}`;
    }
    return formatted;
}

function populateDropdowns() {
    const allFromCities = [...new Set(busData.map(bus => bus.route_from))];
    const allToCities = [...new Set(busData.map(bus => bus.route_to))];

    // Initial population
    updateFromDropdown(allFromCities, '');
    updateToDropdown(allToCities, '');

    // Add change event listeners for smart filtering
    filterFrom.addEventListener('change', () => {
        const selectedFrom = filterFrom.value;

        if (selectedFrom && selectedFrom !== 'Shivpuri') {
            // If non-Shivpuri city selected in From, To can only be Shivpuri
            updateToDropdown(['Shivpuri'], 'Shivpuri');
        } else {
            // Reset To dropdown to all cities
            updateToDropdown(allToCities, filterTo.value);
        }
        applyFilters();
    });

    filterTo.addEventListener('change', () => {
        const selectedTo = filterTo.value;

        if (selectedTo && selectedTo !== 'Shivpuri') {
            // If non-Shivpuri city selected in To, From can only be Shivpuri
            updateFromDropdown(['Shivpuri'], 'Shivpuri');
        } else {
            // Reset From dropdown to all cities
            updateFromDropdown(allFromCities, filterFrom.value);
        }
        applyFilters();
    });
}

function updateFromDropdown(cities, selectedValue) {
    const currentValue = selectedValue || filterFrom.value;
    filterFrom.innerHTML = '<option value="">From City</option>';

    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        if (city === currentValue) option.selected = true;
        filterFrom.appendChild(option);
    });

    // If current value is not in new options, auto-select if only one option
    if (cities.length === 1) {
        filterFrom.value = cities[0];
    }
}

function updateToDropdown(cities, selectedValue) {
    const currentValue = selectedValue || filterTo.value;
    filterTo.innerHTML = '<option value="">To City</option>';

    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        if (city === currentValue) option.selected = true;
        filterTo.appendChild(option);
    });

    // If current value is not in new options, auto-select if only one option
    if (cities.length === 1) {
        filterTo.value = cities[0];
    }
}

function getHourFromTimestamp(timestamp) {
    const date = new Date(timestamp);
    // Get UTC hour because our timestamps are UTC-based for this app logic
    return date.getUTCHours();
}

let currentBuses = [];
let visibleCount = 6;
const ITEMS_PER_PAGE = 6;
const loadMoreContainer = document.getElementById('load-more-container');
const loadMoreBtn = document.getElementById('load-more-btn');

// --- PAGE UPDATES FOR LANGUAGE ---
function updatePageLanguage(lang) {
    // Re-render content if dynamic
    if (typeof isTransportPage !== 'undefined' && isTransportPage) {
        // Update Filters
        if (filterFrom && filterFrom.options.length > 0) filterFrom.options[0].textContent = translations[lang].filter_from;
        if (filterTo && filterTo.options.length > 0) filterTo.options[0].textContent = translations[lang].filter_to;
        if (filterTime && filterTime.options.length > 0) {
            filterTime.options[0].textContent = translations[lang].filter_time;
            filterTime.options[1].textContent = translations[lang].filter_time_0_6;
            filterTime.options[2].textContent = translations[lang].filter_time_6_12;
            filterTime.options[3].textContent = translations[lang].filter_time_12_18;
            filterTime.options[4].textContent = translations[lang].filter_time_18_24;
        }

        // Update static buttons
        if (resetBtn) resetBtn.textContent = translations[lang].reset_btn;
        if (loadMoreBtn) loadMoreBtn.textContent = translations[lang].load_more;

        renderBuses(currentBuses.length > 0 ? currentBuses : busData);
    } else if (typeof isPlacesPage !== 'undefined' && isPlacesPage) {
        renderPlaces();
    } else if (typeof isFoodPage !== 'undefined' && isFoodPage) {
        renderFood();
    }
}

function renderBuses(buses, append = false) {
    if (!append) {
        grid.innerHTML = '';
        visibleCount = ITEMS_PER_PAGE;
        currentBuses = buses;
    }

    if (buses.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No buses found matching your search.</p>';
        loadMoreContainer.style.display = 'none';
        return;
    }

    // Sort: Departure Time Ascending
    // Note: If appending, we assume 'buses' is already sorted or we are rendering a slice
    // Ideally, we sort the main array once and then slice it.
    // For simplicity in this structure: 'currentBuses' holds the full sorted list.

    if (!append) {
        currentBuses.sort((a, b) => a.departure_time - b.departure_time);
    }

    const busesToShow = currentBuses.slice(0, visibleCount);

    // Clear grid if not appending (already done above, but safe to ensure logic)
    if (!append) grid.innerHTML = '';

    // If appending, we only want to render the NEW items, but simplistic approach is re-render or render slice.
    // Better approach: Render only the slice range.

    const start = append ? visibleCount - ITEMS_PER_PAGE : 0;
    const end = visibleCount;
    const sliceToRender = currentBuses.slice(start, end);



    sliceToRender.forEach(bus => {
        const isHi = currentLang === 'hi';

        // Translate Fields
        let from = bus.route_from;
        let to = bus.route_to;
        let via = bus.via;
        let type = bus.bus_type;
        let days = bus.days_of_operation;

        if (isHi) {
            from = cityTranslations[from] || from;
            to = cityTranslations[to] || to;
            type = busTypeTranslations[type] || type;
            days = days === "Daily" ? "रोजाना" : days;

            // Translate Via (Simple split/join)
            via = via.split(' • ').map(v => cityTranslations[v] || v).join(' • ');
        }

        const card = document.createElement('div');
        card.className = 'bus-card';

        const departure = formatTime(bus.departure_time);
        const arrival = formatTimeString(bus.arrival_time);

        // Update dynamic text in card
        // WhatsApp Message
        const shareText = `🚌 *Bus Schedule Alert*\n\n*${bus.operator_name}*\nFrom: ${from}\nTo: ${to}\nTime: ${departure}\n${isHi ? "द्वारा" : "Via"}: ${via}\n\nCheck full schedule on: https://shivpurilocal.in`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

        card.innerHTML = `
            <div class="card-header">
                <h3 class="operator-name">${bus.operator_name}</h3>
                <span class="bus-type">${type}</span>
            </div>
            
            <div class="route-info">
                <div class="time-loc">
                    <span class="time">${departure}</span>
                    <span class="location">${from}</span>
                </div>
                <div class="duration-bar">
                    <span class="duration-text">${Math.floor(bus.distance_km / 50)}h 30m</span>
                    <div class="line">
                        <div class="dot start"></div>
                        <div class="dot end"></div>
                    </div>
                </div>
                <div class="time-loc" style="text-align: right;">
                    <span class="time">${arrival}</span>
                    <span class="location">${to}</span>
                </div>
            </div>

            <div class="meta-row">
                <div class="meta-item">
                    <span class="label">${isHi ? "द्वारा" : "Via"}</span>
                    <span class="value">${via}</span>
                </div>
                 <div class="meta-item">
                    <span class="label">${isHi ? "दिन" : "Days"}</span>
                    <span class="value">${days}</span>
                </div>
            </div>
            <a href="${whatsappUrl}" target="_blank" class="share-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
                ${translations[currentLang].share_btn}
            </a>
        `;
        grid.appendChild(card);
    });

    // Update Load More Button Visibility
    if (visibleCount >= currentBuses.length) {
        loadMoreContainer.style.display = 'none';
    } else {
        loadMoreContainer.style.display = 'block';
    }
}

function applyFilters() {
    const fromVal = filterFrom.value;
    const toVal = filterTo.value;
    const timeVal = filterTime.value;

    // Toggle Reset Button State
    if (resetBtn) {
        const hasFilters = fromVal !== "" || toVal !== "" || timeVal !== "";
        if (hasFilters) {
            resetBtn.textContent = "Reset Filters";
            resetBtn.classList.add("reset-mode");
        } else {
            resetBtn.textContent = "Search Buses";
            resetBtn.classList.remove("reset-mode");
        }
    }

    const filtered = busData.filter(bus => {
        // Dropdown Filters
        const matchesFrom = fromVal === "" || bus.route_from === fromVal;
        const matchesTo = toVal === "" || bus.route_to === toVal;

        // Time Filter
        let matchesTime = true;
        if (timeVal !== "") {
            const hour = getHourFromTimestamp(bus.departure_time);
            const [start, end] = timeVal.split('-').map(Number);
            matchesTime = hour >= start && hour < end;
        }

        return matchesFrom && matchesTo && matchesTime;
    });

    renderBuses(filtered);
}

// Render Places
function renderPlaces(places = placesData) {
    grid.innerHTML = '';
    visibleCount = ITEMS_PER_PAGE;
    loadMoreContainer.style.display = 'none';

    const isHi = currentLang === 'hi';
    const noPlacesText = isHi ? "कोई जगह नहीं मिली।" : "No places found.";

    if (places.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">${noPlacesText}</p>`;
        return;
    }

    places.forEach(place => {
        const name = isHi ? (place.name_hi || place.name) : place.name;
        const category = isHi ? (place.category_hi || place.category) : place.category;
        const area = isHi ? (place.area_hi || place.area) : place.area;
        const desc = isHi ? (place.shortDescription_hi || place.shortDescription) : place.shortDescription;

        const card = document.createElement('div');
        card.className = 'place-card';

        const shareText = `📍 *${name}*\n\n${desc}\n\nCategory: ${category}\nArea: ${area}\n\nExplore more on: https://shivpurilocal.in`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

        card.innerHTML = `
            <div class="place-content">
                <span class="place-cat">${category}</span>
                <h3 class="place-name">${name}</h3>
                <p class="place-area">📍 ${area}</p>
                <p class="place-desc">${desc}</p>
                
                <div class="place-tags">
                    ${place.tags.slice(0, 3).map(tag => `<span class="tag">#${tag}</span>`).join('')}
                </div>

                <div class="card-actions">
                    <a href="${whatsappUrl}" target="_blank" class="share-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                        </svg>
                        ${translations[currentLang].share_btn}
                    </a>
                    <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + ' Shivpuri')}" target="_blank" class="map-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                        ${translations[currentLang].map_btn}
                    </a>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Render Food
function renderFood(food = foodData) {
    grid.innerHTML = '';
    visibleCount = ITEMS_PER_PAGE;
    loadMoreContainer.style.display = 'none';

    const isHi = currentLang === 'hi';
    const noFoodText = isHi ? "कोई खाने की जगह नहीं मिली।" : "No food spots found.";

    if (food.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">${noFoodText}</p>`;
        return;
    }

    food.forEach(item => {
        const name = isHi ? (item.name_hi || item.name) : item.name;
        const category = isHi ? (item.category_hi || item.category) : item.category;
        const area = isHi ? (item.area_hi || item.area) : item.area;
        const desc = isHi ? (item.shortDescription_hi || item.shortDescription) : item.shortDescription;

        const card = document.createElement('div');
        card.className = 'food-card';

        const shareText = `🍽️ *${name}*\n\n${desc}\n\nCategory: ${category}\nArea: ${area}\nPrice for 2: ₹${item.approxPriceForTwo}\n\nExplore more on: https://shivpurilocal.in`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

        card.innerHTML = `
            <div class="food-content">
                <span class="food-cat">${category}</span>
                <h3 class="food-name">${name}</h3>
                <div class="food-meta">
                    <span class="food-area">📍 ${area}</span>
                    <span class="food-price">₹${item.approxPriceForTwo} for two</span>
                </div>
                <p class="food-desc">${desc}</p>

                <div class="food-tags">
                    ${item.tags.slice(0, 3).map(tag => `<span class="tag">#${tag}</span>`).join('')}
                </div>

                <div class="card-actions">
                    <a href="${whatsappUrl}" target="_blank" class="share-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                        </svg>
                        ${translations[currentLang].share_btn}
                    </a>
                    <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + ' Shivpuri')}" target="_blank" class="map-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                        Map
                    </a>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Show Category
function showCategory(category) {
    currentCategory = category;

    // Hide category selection
    categorySelection.style.display = 'none';

    // Update nav active state
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.category === category) {
            link.classList.add('active');
        }
    });

    // Show/hide sections based on category
    if (category === 'transport') {
        busScheduleContainer.style.display = 'block';
        emergencySection.style.display = 'block';
        document.getElementById('hero-title').textContent = 'Local Bus Schedule';
        document.getElementById('hero-desc').textContent = 'Find the best route to your destination in Shivpuri.';
        renderBuses(busData);
    } else if (category === 'places') {
        busScheduleContainer.style.display = 'block';
        emergencySection.style.display = 'none';
        document.getElementById('hero-title').textContent = 'Explore Places';
        document.getElementById('hero-desc').textContent = 'Discover the best attractions in Shivpuri.';
        // Hide filters for places
        document.querySelector('.search-filter-bar').style.display = 'none';
        renderPlaces();
    } else if (category === 'food') {
        busScheduleContainer.style.display = 'block';
        emergencySection.style.display = 'none';
        document.getElementById('hero-title').textContent = 'Food & Dining';
        document.getElementById('hero-desc').textContent = 'Find the best restaurants and cafes in Shivpuri.';
        // Hide filters for food
        document.querySelector('.search-filter-bar').style.display = 'none';
        renderFood();
    }
}

// Toast Notification Logic
function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);
    toast.offsetHeight; // Trigger reflow
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            container.removeChild(toast);
        }, 300);
    }, 3000);
}

// --- PAGE INITIALIZATION LOGIC ---

// Detect Page
const isTransportPage = document.body.classList.contains('page-transport');
const isPlacesPage = document.body.classList.contains('page-places');
const isFoodPage = document.body.classList.contains('page-food');

// Global initializers
if (typeof updateLanguage === 'function') {
    // common.js handles language init
}

// Page Specific Init
if (isTransportPage) {
    populateDropdowns();
    renderBuses(busData);

    // Event Listeners for Transport
    // Event Listeners for Transport
    if (filterFrom) filterFrom.addEventListener('change', applyFilters);
    if (filterTo) filterTo.addEventListener('change', applyFilters);
    if (filterTime) filterTime.addEventListener('change', applyFilters);

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (resetBtn.classList.contains('reset-mode')) {
                filterFrom.value = '';
                filterTo.value = '';
                filterTime.value = '';
                applyFilters();
            } else {
                // Search Mode: Scroll to buses
                const grid = document.getElementById('schedule-grid');
                if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            visibleCount += ITEMS_PER_PAGE;
            renderBuses(currentBuses, true);
        });
    }
}

if (isPlacesPage) {
    renderPlaces();
}

if (isFoodPage) {
    renderFood();
}

// Helper to keep Load More working correctly in Transport
function getCurrentFilteredBuses() {
    // Re-use applyFitlters logic but return data? 
    // Actually applyFilters calls renderBuses. 
    // renderBuses uses visibleCount.
    return busData; // placeholder if needed
}

// Init Language (if not done by common.js)
// updateLanguage(currentLang);
