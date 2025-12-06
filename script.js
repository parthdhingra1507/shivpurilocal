const busData = [
    { "operator_name": "DubeyJi Travels", "route_from": "Bhopal", "route_to": "Shivpuri", "via": "Biaora • Guna", "distance_km": 320, "departure_time": 1764914400000, "arrival_time": "14:00", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Bhopal–Shivpuri Via Biaora (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Bhopal", "route_to": "Shivpuri", "via": "Biaora • Guna", "distance_km": 320, "departure_time": 1764923400000, "arrival_time": "16:40", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Bhopal–Shivpuri Via Biaora (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Bhopal", "route_to": "Shivpuri", "via": "Biaora • Guna", "distance_km": 320, "departure_time": 1764936000000, "arrival_time": "20:15", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Bhopal–Shivpuri Via Biaora (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Bhopal", "route_to": "Shivpuri", "via": "Biaora • Guna", "distance_km": 320, "departure_time": 1764948600000, "arrival_time": "23:35", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Bhopal–Shivpuri Via Biaora (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Bhopal", "route_to": "Shivpuri", "via": "Biaora • Guna", "distance_km": 320, "departure_time": 1764957600000, "arrival_time": "02:00 (+1)", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Bhopal–Shivpuri Via Biaora (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Bhopal", "route_to": "Shivpuri", "via": "Biaora • Guna", "distance_km": 320, "departure_time": 1764972000000, "arrival_time": "05:50 (+1)", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Bhopal–Shivpuri Via Biaora (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Datia", "route_to": "Shivpuri", "via": "Dabra", "distance_km": 95, "departure_time": 1764914400000, "arrival_time": "08:10", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Datia–Shivpuri Via Dabra (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Datia", "route_to": "Shivpuri", "via": "Dabra", "distance_km": 95, "departure_time": 1764923400000, "arrival_time": "10:50", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Datia–Shivpuri Via Dabra (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Datia", "route_to": "Shivpuri", "via": "Dabra", "distance_km": 95, "departure_time": 1764936000000, "arrival_time": "14:25", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Datia–Shivpuri Via Dabra (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Datia", "route_to": "Shivpuri", "via": "Dabra", "distance_km": 95, "departure_time": 1764948600000, "arrival_time": "17:45", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Datia–Shivpuri Via Dabra (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Datia", "route_to": "Shivpuri", "via": "Dabra", "distance_km": 95, "departure_time": 1764957600000, "arrival_time": "20:10", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Datia–Shivpuri Via Dabra (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Datia", "route_to": "Shivpuri", "via": "Dabra", "distance_km": 95, "departure_time": 1764972000000, "arrival_time": "00:00 (+1)", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Datia–Shivpuri Via Dabra (AC Seater 2+2)" }, { "operator_name": "Sharad Travels", "route_from": "Guna", "route_to": "Shivpuri", "via": "Raghogarh • Badarwas", "distance_km": 103, "departure_time": 1764914400000, "arrival_time": "08:15", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Guna–Shivpuri Via Raghogarh (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Guna", "route_to": "Shivpuri", "via": "Raghogarh • Badarwas", "distance_km": 103, "departure_time": 1764923400000, "arrival_time": "10:55", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Guna–Shivpuri Via Raghogarh (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Guna", "route_to": "Shivpuri", "via": "Raghogarh • Badarwas", "distance_km": 103, "departure_time": 1764936000000, "arrival_time": "14:30", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Guna–Shivpuri Via Raghogarh (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Guna", "route_to": "Shivpuri", "via": "Raghogarh • Badarwas", "distance_km": 103, "departure_time": 1764948600000, "arrival_time": "17:50", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Guna–Shivpuri Via Raghogarh (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Guna", "route_to": "Shivpuri", "via": "Raghogarh • Badarwas", "distance_km": 103, "departure_time": 1764957600000, "arrival_time": "20:15", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Guna–Shivpuri Via Raghogarh (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Guna", "route_to": "Shivpuri", "via": "Raghogarh • Badarwas", "distance_km": 103, "departure_time": 1764972000000, "arrival_time": "00:05 (+1)", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Guna–Shivpuri Via Raghogarh (Non-AC Sleeper 2+1)" }, { "operator_name": "Hans Travels", "route_from": "Gwalior", "route_to": "Shivpuri", "via": "Mohna • Kolaras", "distance_km": 115, "departure_time": 1764914400000, "arrival_time": "08:30", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Gwalior–Shivpuri Via Mohna (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Gwalior", "route_to": "Shivpuri", "via": "Mohna • Kolaras", "distance_km": 115, "departure_time": 1764923400000, "arrival_time": "11:10", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Gwalior–Shivpuri Via Mohna (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Gwalior", "route_to": "Shivpuri", "via": "Mohna • Kolaras", "distance_km": 115, "departure_time": 1764936000000, "arrival_time": "14:45", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Gwalior–Shivpuri Via Mohna (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Gwalior", "route_to": "Shivpuri", "via": "Mohna • Kolaras", "distance_km": 115, "departure_time": 1764948600000, "arrival_time": "18:05", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Gwalior–Shivpuri Via Mohna (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Gwalior", "route_to": "Shivpuri", "via": "Mohna • Kolaras", "distance_km": 115, "departure_time": 1764957600000, "arrival_time": "20:30", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Gwalior–Shivpuri Via Mohna (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Gwalior", "route_to": "Shivpuri", "via": "Mohna • Kolaras", "distance_km": 115, "departure_time": 1764972000000, "arrival_time": "00:20 (+1)", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Gwalior–Shivpuri Via Mohna (AC Sleeper 2+1)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Indore", "route_to": "Shivpuri", "via": "Dewas • Guna", "distance_km": 360, "departure_time": 1764914400000, "arrival_time": "15:00", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Indore–Shivpuri Via Dewas (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Indore", "route_to": "Shivpuri", "via": "Dewas • Guna", "distance_km": 360, "departure_time": 1764923400000, "arrival_time": "17:40", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Indore–Shivpuri Via Dewas (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Indore", "route_to": "Shivpuri", "via": "Dewas • Guna", "distance_km": 360, "departure_time": 1764936000000, "arrival_time": "21:15", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Indore–Shivpuri Via Dewas (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Indore", "route_to": "Shivpuri", "via": "Dewas • Guna", "distance_km": 360, "departure_time": 1764948600000, "arrival_time": "00:35 (+1)", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Indore–Shivpuri Via Dewas (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Indore", "route_to": "Shivpuri", "via": "Dewas • Guna", "distance_km": 360, "departure_time": 1764957600000, "arrival_time": "03:00 (+1)", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Indore–Shivpuri Via Dewas (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Indore", "route_to": "Shivpuri", "via": "Dewas • Guna", "distance_km": 360, "departure_time": 1764972000000, "arrival_time": "06:50 (+1)", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Indore–Shivpuri Via Dewas (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Jaipur", "route_to": "Shivpuri", "via": "Dausa • Lalsot", "distance_km": 330, "departure_time": 1764914400000, "arrival_time": "14:00", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Jaipur–Shivpuri Via Dausa (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Jaipur", "route_to": "Shivpuri", "via": "Dausa • Lalsot", "distance_km": 330, "departure_time": 1764923400000, "arrival_time": "16:40", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Jaipur–Shivpuri Via Dausa (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Jaipur", "route_to": "Shivpuri", "via": "Dausa • Lalsot", "distance_km": 330, "departure_time": 1764936000000, "arrival_time": "20:15", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Jaipur–Shivpuri Via Dausa (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Jaipur", "route_to": "Shivpuri", "via": "Dausa • Lalsot", "distance_km": 330, "departure_time": 1764948600000, "arrival_time": "23:35", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Jaipur–Shivpuri Via Dausa (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Jaipur", "route_to": "Shivpuri", "via": "Dausa • Lalsot", "distance_km": 330, "departure_time": 1764957600000, "arrival_time": "02:00 (+1)", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Jaipur–Shivpuri Via Dausa (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Jaipur", "route_to": "Shivpuri", "via": "Dausa • Lalsot", "distance_km": 330, "departure_time": 1764972000000, "arrival_time": "05:50 (+1)", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Jaipur–Shivpuri Via Dausa (Non-AC Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Jhansi", "route_to": "Shivpuri", "via": "Dabra • Datia", "distance_km": 100, "departure_time": 1764914400000, "arrival_time": "08:20", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Jhansi–Shivpuri Via Dabra (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Jhansi", "route_to": "Shivpuri", "via": "Dabra • Datia", "distance_km": 100, "departure_time": 1764923400000, "arrival_time": "11:00", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Jhansi–Shivpuri Via Dabra (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Jhansi", "route_to": "Shivpuri", "via": "Dabra • Datia", "distance_km": 100, "departure_time": 1764936000000, "arrival_time": "14:35", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Jhansi–Shivpuri Via Dabra (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Jhansi", "route_to": "Shivpuri", "via": "Dabra • Datia", "distance_km": 100, "departure_time": 1764948600000, "arrival_time": "17:55", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Jhansi–Shivpuri Via Dabra (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Jhansi", "route_to": "Shivpuri", "via": "Dabra • Datia", "distance_km": 100, "departure_time": 1764957600000, "arrival_time": "20:20", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Jhansi–Shivpuri Via Dabra (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Jhansi", "route_to": "Shivpuri", "via": "Dabra • Datia", "distance_km": 100, "departure_time": 1764972000000, "arrival_time": "00:10 (+1)", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Jhansi–Shivpuri Via Dabra (Express Seater 3+2)" }, { "operator_name": "Hans Travels", "route_from": "Kota", "route_to": "Shivpuri", "via": "Baran", "distance_km": 260, "departure_time": 1764914400000, "arrival_time": "12:00", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Kota–Shivpuri Via Baran (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Kota", "route_to": "Shivpuri", "via": "Baran", "distance_km": 260, "departure_time": 1764923400000, "arrival_time": "14:40", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Kota–Shivpuri Via Baran (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Kota", "route_to": "Shivpuri", "via": "Baran", "distance_km": 260, "departure_time": 1764936000000, "arrival_time": "18:15", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Kota–Shivpuri Via Baran (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Kota", "route_to": "Shivpuri", "via": "Baran", "distance_km": 260, "departure_time": 1764948600000, "arrival_time": "21:35", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Kota–Shivpuri Via Baran (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Kota", "route_to": "Shivpuri", "via": "Baran", "distance_km": 260, "departure_time": 1764957600000, "arrival_time": "00:00 (+1)", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Kota–Shivpuri Via Baran (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Kota", "route_to": "Shivpuri", "via": "Baran", "distance_km": 260, "departure_time": 1764972000000, "arrival_time": "03:50 (+1)", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Kota–Shivpuri Via Baran (AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Sheopur", "route_to": "Shivpuri", "via": "Pohri • Karahal", "distance_km": 120, "departure_time": 1764914400000, "arrival_time": "09:20", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Sheopur–Shivpuri Via Pohri (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Sheopur", "route_to": "Shivpuri", "via": "Pohri • Karahal", "distance_km": 120, "departure_time": 1764923400000, "arrival_time": "12:00", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Sheopur–Shivpuri Via Pohri (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Sheopur", "route_to": "Shivpuri", "via": "Pohri • Karahal", "distance_km": 120, "departure_time": 1764936000000, "arrival_time": "15:35", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Sheopur–Shivpuri Via Pohri (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Sheopur", "route_to": "Shivpuri", "via": "Pohri • Karahal", "distance_km": 120, "departure_time": 1764948600000, "arrival_time": "18:55", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Sheopur–Shivpuri Via Pohri (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Sheopur", "route_to": "Shivpuri", "via": "Pohri • Karahal", "distance_km": 120, "departure_time": 1764957600000, "arrival_time": "21:20", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Sheopur–Shivpuri Via Pohri (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Sheopur", "route_to": "Shivpuri", "via": "Pohri • Karahal", "distance_km": 120, "departure_time": 1764972000000, "arrival_time": "01:10 (+1)", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Sheopur–Shivpuri Via Pohri (AC Seater 2+2)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Shivpuri", "route_to": "Bhopal", "via": "Guna • Biaora", "distance_km": 320, "departure_time": 1764914400000, "arrival_time": "14:00", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Shivpuri–Bhopal Via Guna (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Shivpuri", "route_to": "Bhopal", "via": "Guna • Biaora", "distance_km": 320, "departure_time": 1764923400000, "arrival_time": "16:40", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Shivpuri–Bhopal Via Guna (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Shivpuri", "route_to": "Bhopal", "via": "Guna • Biaora", "distance_km": 320, "departure_time": 1764936000000, "arrival_time": "20:15", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Shivpuri–Bhopal Via Guna (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Shivpuri", "route_to": "Bhopal", "via": "Guna • Biaora", "distance_km": 320, "departure_time": 1764948600000, "arrival_time": "23:35", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Shivpuri–Bhopal Via Guna (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Shivpuri", "route_to": "Bhopal", "via": "Guna • Biaora", "distance_km": 320, "departure_time": 1764957600000, "arrival_time": "02:00 (+1)", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Shivpuri–Bhopal Via Guna (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Shivpuri", "route_to": "Bhopal", "via": "Guna • Biaora", "distance_km": 320, "departure_time": 1764972000000, "arrival_time": "05:50 (+1)", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Shivpuri–Bhopal Via Guna (Express Seater 3+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Shivpuri", "route_to": "Datia", "via": "Dabra", "distance_km": 95, "departure_time": 1764914400000, "arrival_time": "08:10", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Shivpuri–Datia Via Dabra (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Shivpuri", "route_to": "Datia", "via": "Dabra", "distance_km": 95, "departure_time": 1764923400000, "arrival_time": "10:50", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Shivpuri–Datia Via Dabra (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Shivpuri", "route_to": "Datia", "via": "Dabra", "distance_km": 95, "departure_time": 1764936000000, "arrival_time": "14:25", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Shivpuri–Datia Via Dabra (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Shivpuri", "route_to": "Datia", "via": "Dabra", "distance_km": 95, "departure_time": 1764948600000, "arrival_time": "17:45", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Shivpuri–Datia Via Dabra (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Shivpuri", "route_to": "Datia", "via": "Dabra", "distance_km": 95, "departure_time": 1764957600000, "arrival_time": "20:10", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Shivpuri–Datia Via Dabra (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Shivpuri", "route_to": "Datia", "via": "Dabra", "distance_km": 95, "departure_time": 1764972000000, "arrival_time": "00:00 (+1)", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Shivpuri–Datia Via Dabra (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Shivpuri", "route_to": "Guna", "via": "Badarwas • Raghogarh", "distance_km": 103, "departure_time": 1764914400000, "arrival_time": "08:15", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Shivpuri–Guna Via Badarwas (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Shivpuri", "route_to": "Guna", "via": "Badarwas • Raghogarh", "distance_km": 103, "departure_time": 1764923400000, "arrival_time": "10:55", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Shivpuri–Guna Via Badarwas (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Shivpuri", "route_to": "Guna", "via": "Badarwas • Raghogarh", "distance_km": 103, "departure_time": 1764936000000, "arrival_time": "14:30", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Shivpuri–Guna Via Badarwas (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Shivpuri", "route_to": "Guna", "via": "Badarwas • Raghogarh", "distance_km": 103, "departure_time": 1764948600000, "arrival_time": "17:50", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Shivpuri–Guna Via Badarwas (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Shivpuri", "route_to": "Guna", "via": "Badarwas • Raghogarh", "distance_km": 103, "departure_time": 1764957600000, "arrival_time": "20:15", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Shivpuri–Guna Via Badarwas (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Shivpuri", "route_to": "Guna", "via": "Badarwas • Raghogarh", "distance_km": 103, "departure_time": 1764972000000, "arrival_time": "00:05 (+1)", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Shivpuri–Guna Via Badarwas (AC Seater 2+2)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Shivpuri", "route_to": "Gwalior", "via": "Kolaras • Mohna", "distance_km": 115, "departure_time": 1764914400000, "arrival_time": "08:30", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Shivpuri–Gwalior Via Kolaras (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Shivpuri", "route_to": "Gwalior", "via": "Kolaras • Mohna", "distance_km": 115, "departure_time": 1764923400000, "arrival_time": "11:10", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Shivpuri–Gwalior Via Kolaras (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Shivpuri", "route_to": "Gwalior", "via": "Kolaras • Mohna", "distance_km": 115, "departure_time": 1764936000000, "arrival_time": "14:45", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Shivpuri–Gwalior Via Kolaras (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Shivpuri", "route_to": "Gwalior", "via": "Kolaras • Mohna", "distance_km": 115, "departure_time": 1764948600000, "arrival_time": "18:05", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Shivpuri–Gwalior Via Kolaras (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Shivpuri", "route_to": "Gwalior", "via": "Kolaras • Mohna", "distance_km": 115, "departure_time": 1764957600000, "arrival_time": "20:30", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Shivpuri–Gwalior Via Kolaras (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Shivpuri", "route_to": "Gwalior", "via": "Kolaras • Mohna", "distance_km": 115, "departure_time": 1764972000000, "arrival_time": "00:20 (+1)", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Shivpuri–Gwalior Via Kolaras (AC Seater 2+2)" }, { "operator_name": "Sharad Travels", "route_from": "Shivpuri", "route_to": "Indore", "via": "Guna • Dewas", "distance_km": 360, "departure_time": 1764914400000, "arrival_time": "15:00", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Shivpuri–Indore Via Guna (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Shivpuri", "route_to": "Indore", "via": "Guna • Dewas", "distance_km": 360, "departure_time": 1764923400000, "arrival_time": "17:40", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Shivpuri–Indore Via Guna (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Shivpuri", "route_to": "Indore", "via": "Guna • Dewas", "distance_km": 360, "departure_time": 1764936000000, "arrival_time": "21:15", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Shivpuri–Indore Via Guna (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Shivpuri", "route_to": "Indore", "via": "Guna • Dewas", "distance_km": 360, "departure_time": 1764948600000, "arrival_time": "00:35 (+1)", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Shivpuri–Indore Via Guna (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Shivpuri", "route_to": "Indore", "via": "Guna • Dewas", "distance_km": 360, "departure_time": 1764957600000, "arrival_time": "03:00 (+1)", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Shivpuri–Indore Via Guna (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Shivpuri", "route_to": "Indore", "via": "Guna • Dewas", "distance_km": 360, "departure_time": 1764972000000, "arrival_time": "06:50 (+1)", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Shivpuri–Indore Via Guna (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Shivpuri", "route_to": "Jaipur", "via": "Lalsot • Dausa", "distance_km": 330, "departure_time": 1764914400000, "arrival_time": "14:00", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Shivpuri–Jaipur Via Lalsot (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Shivpuri", "route_to": "Jaipur", "via": "Lalsot • Dausa", "distance_km": 330, "departure_time": 1764923400000, "arrival_time": "16:40", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Shivpuri–Jaipur Via Lalsot (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Shivpuri", "route_to": "Jaipur", "via": "Lalsot • Dausa", "distance_km": 330, "departure_time": 1764936000000, "arrival_time": "20:15", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Shivpuri–Jaipur Via Lalsot (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Shivpuri", "route_to": "Jaipur", "via": "Lalsot • Dausa", "distance_km": 330, "departure_time": 1764948600000, "arrival_time": "23:35", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Shivpuri–Jaipur Via Lalsot (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Shivpuri", "route_to": "Jaipur", "via": "Lalsot • Dausa", "distance_km": 330, "departure_time": 1764957600000, "arrival_time": "02:00 (+1)", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Shivpuri–Jaipur Via Lalsot (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Shivpuri", "route_to": "Jaipur", "via": "Lalsot • Dausa", "distance_km": 330, "departure_time": 1764972000000, "arrival_time": "05:50 (+1)", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Shivpuri–Jaipur Via Lalsot (AC Seater 2+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Shivpuri", "route_to": "Jhansi", "via": "Datia • Dabra", "distance_km": 100, "departure_time": 1764914400000, "arrival_time": "08:20", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Shivpuri–Jhansi Via Datia (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Shivpuri", "route_to": "Jhansi", "via": "Datia • Dabra", "distance_km": 100, "departure_time": 1764923400000, "arrival_time": "11:00", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Shivpuri–Jhansi Via Datia (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Shivpuri", "route_to": "Jhansi", "via": "Datia • Dabra", "distance_km": 100, "departure_time": 1764936000000, "arrival_time": "14:35", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Shivpuri–Jhansi Via Datia (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Shivpuri", "route_to": "Jhansi", "via": "Datia • Dabra", "distance_km": 100, "departure_time": 1764948600000, "arrival_time": "17:55", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Shivpuri–Jhansi Via Datia (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Shivpuri", "route_to": "Jhansi", "via": "Datia • Dabra", "distance_km": 100, "departure_time": 1764957600000, "arrival_time": "20:20", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Shivpuri–Jhansi Via Datia (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Shivpuri", "route_to": "Jhansi", "via": "Datia • Dabra", "distance_km": 100, "departure_time": 1764972000000, "arrival_time": "00:10 (+1)", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Shivpuri–Jhansi Via Datia (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Shivpuri", "route_to": "Kota", "via": "Baran", "distance_km": 260, "departure_time": 1764914400000, "arrival_time": "12:00", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Shivpuri–Kota Via Baran (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Shivpuri", "route_to": "Kota", "via": "Baran", "distance_km": 260, "departure_time": 1764923400000, "arrival_time": "14:40", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Shivpuri–Kota Via Baran (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Shivpuri", "route_to": "Kota", "via": "Baran", "distance_km": 260, "departure_time": 1764936000000, "arrival_time": "18:15", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Shivpuri–Kota Via Baran (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Shivpuri", "route_to": "Kota", "via": "Baran", "distance_km": 260, "departure_time": 1764948600000, "arrival_time": "21:35", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Shivpuri–Kota Via Baran (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Shivpuri", "route_to": "Kota", "via": "Baran", "distance_km": 260, "departure_time": 1764957600000, "arrival_time": "00:00 (+1)", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Shivpuri–Kota Via Baran (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Shivpuri", "route_to": "Kota", "via": "Baran", "distance_km": 260, "departure_time": 1764972000000, "arrival_time": "03:50 (+1)", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Shivpuri–Kota Via Baran (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Shivpuri", "route_to": "Sheopur", "via": "Karahal • Pohri", "distance_km": 120, "departure_time": 1764914400000, "arrival_time": "09:20", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Shivpuri–Sheopur Via Karahal (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Shivpuri", "route_to": "Sheopur", "via": "Karahal • Pohri", "distance_km": 120, "departure_time": 1764923400000, "arrival_time": "12:00", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Shivpuri–Sheopur Via Karahal (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Shivpuri", "route_to": "Sheopur", "via": "Karahal • Pohri", "distance_km": 120, "departure_time": 1764936000000, "arrival_time": "15:35", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Shivpuri–Sheopur Via Karahal (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Shivpuri", "route_to": "Sheopur", "via": "Karahal • Pohri", "distance_km": 120, "departure_time": 1764948600000, "arrival_time": "18:55", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Shivpuri–Sheopur Via Karahal (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Shivpuri", "route_to": "Sheopur", "via": "Karahal • Pohri", "distance_km": 120, "departure_time": 1764957600000, "arrival_time": "21:20", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Shivpuri–Sheopur Via Karahal (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Shivpuri", "route_to": "Sheopur", "via": "Karahal • Pohri", "distance_km": 120, "departure_time": 1764972000000, "arrival_time": "01:10 (+1)", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Shivpuri–Sheopur Via Karahal (AC Sleeper 2+1)" }
];

const placesData = [
    { name: "Madhav National Park", category: "Nature & Wildlife", area: "Near Shivpuri", shortDescription: "National park / tiger reserve with lakes, deer, leopards and rich birdlife.", tags: ["wildlife", "tiger-reserve", "safari", "birding", "family-outing"] },
    { name: "Sakhya Sagar Lake", category: "Lake", area: "Edge of Madhav National Park", shortDescription: "Scenic lake and Ramsar site, known for crocodiles, birds and sunset views.", tags: ["lake", "sunset", "boating", "bird-watching"] },
    { name: "Bhadaiya Kund", category: "Waterfall / Spring", area: "Outskirts of Shivpuri", shortDescription: "Natural spring and small waterfall, popular local picnic spot.", tags: ["waterfall", "picnic", "monsoon-spot", "nature"] },
    { name: "Bhoora Khon Waterfall", category: "Waterfall", area: "Near Shivpuri (forest side)", shortDescription: "Tall seasonal waterfall with greenery and a small Shiva temple nearby.", tags: ["waterfall", "photography", "picnic", "offbeat"] },
    { name: "Motisagar Talab Viewpoint", category: "Lake / Viewpoint", area: "Shivpuri town", shortDescription: "Quiet lake with viewpoint, good for evening walk and sunset.", tags: ["lake", "sunset", "evening-walk", "relax"] },
    { name: "Royal Scindia Chhatris", category: "Heritage Monument", area: "Shivpuri town", shortDescription: "White marble royal cenotaphs with intricate carving and gardens.", tags: ["heritage", "architecture", "photography", "evening-visit"] },
    { name: "Madhav Vilas Palace", category: "Palace / Heritage", area: "Near Madhav National Park", shortDescription: "Former Scindia summer palace with pink European-style architecture.", tags: ["palace", "royal", "architecture", "history"] },
    { name: "George Castle", category: "Viewpoint / Heritage", area: "Inside Madhav National Park", shortDescription: "Hilltop hunting lodge with panoramic view of lakes and forest.", tags: ["viewpoint", "sunset", "heritage", "inside-park"] },
    { name: "Tatya Tope Memorial Park", category: "Memorial / Park", area: "Shivpuri", shortDescription: "Park and statue dedicated to freedom fighter Tatya Tope.", tags: ["freedom-struggle", "park", "history"] },
    { name: "Survaya ki Garhi", category: "Fort & Temple Complex", area: "Near Narwar (~20 km from Shivpuri)", shortDescription: "Ruined fort with carved temples, monastery and stepwell.", tags: ["heritage", "temples", "architecture", "day-trip"] },
    { name: "Narwar Fort", category: "Hill Fort", area: "Narwar (~40 km from Shivpuri)", shortDescription: "Large historic hilltop fort with expansive views.", tags: ["fort", "history", "viewpoint", "day-trip"] },
    { name: "Siddheshwar Temple", category: "Temple", area: "Chhatri Road, Shivpuri", shortDescription: "Important Shiva temple, crowded during Mahashivratri fair.", tags: ["shiv-temple", "mahashivratri", "pilgrimage"] },
    { name: "Banganga", category: "Holy Kund", area: "Near Shivpuri", shortDescription: "Sacred water body associated with Siddheshwar and rituals.", tags: ["holy-water", "pilgrimage"] },
    { name: "Panihar", category: "Spring / Pilgrimage", area: "On road between Gwalior and Shivpuri", shortDescription: "Holy springs and ghats used for ritual bathing.", tags: ["spring", "bathing-ghat", "religious"] },
    { name: "Madhav Sagar Lake", category: "Lake", area: "Madhav landscape, near Shivpuri", shortDescription: "Lake forming part of the park's scenic and wildlife habitat.", tags: ["lake", "scenic", "wildlife-habitat"] },
    { name: "Chhatri Road Market", category: "Market / Street", area: "Shivpuri town", shortDescription: "Busy street with shops, temples and local food stalls.", tags: ["market", "street-food", "shopping", "evening-walk"] },
    { name: "Jhansi Road Food Belt", category: "Market / Food Street", area: "Jhansi Road, Shivpuri", shortDescription: "Stretch known for Chinese-style street food and small shops.", tags: ["street-food", "chinese", "shopping", "local-vibe"] },
    { name: "Circular Road Food Belt", category: "Food Street", area: "Circular Road, Shivpuri", shortDescription: "Cluster of veg and non-veg restaurants and kebab joints.", tags: ["restaurants", "street-food", "evening", "local-favourite"] },
    { name: "Kuno National Park", category: "Nature & Wildlife (Nearby)", area: "Approx 60–80 km from Shivpuri", shortDescription: "Cheetah reintroduction site and wildlife reserve near Shivpuri.", tags: ["wildlife", "cheetah", "day-trip"] },
    { name: "Datia Palace", category: "Heritage (Nearby)", area: "Datia (~100 km from Shivpuri)", shortDescription: "Seven-storey palace with Rajput–Mughal architecture.", tags: ["heritage", "palace", "day-trip"] }
];

const foodData = [
    { name: "Hotel Sonchiraiya", category: "Restaurant & Family Dining", area: "Circular Road, Shivpuri", shortDescription: "Family restaurant for Chinese and North Indian dishes.", approxPriceForTwo: 500, tags: ["north-indian", "chinese", "family"] },
    { name: "Zayka Restaurant", category: "Restaurant & Family Dining", area: "Near Gwalior Bypass Circle, Shivpuri", shortDescription: "Punjabi and Chinese food, popular mid-budget family spot.", approxPriceForTwo: 300, tags: ["punjabi", "north-indian", "chinese", "family"] },
    { name: "Varun Restaurant Inn", category: "Restaurant & Family Dining", area: "Nai Ki Bagiya, Hospital Road, Shivpuri", shortDescription: "Chinese and Punjabi options for travellers and locals.", approxPriceForTwo: 350, tags: ["punjabi", "chinese", "family"] },
    { name: "Shivpuri Club Cafe", category: "Restaurant / Casual Dining", area: "Main Road, Shivpuri", shortDescription: "Casual dining with mixed menu and good ambience.", approxPriceForTwo: 600, tags: ["north-indian", "snacks", "family", "friends"] },
    { name: "Galaxy Restaurant", category: "Multi-cuisine Restaurant", area: "Shivpuri Locality", shortDescription: "South Indian, North Indian and Chinese in family setting.", approxPriceForTwo: 200, tags: ["south-indian", "north-indian", "chinese", "family"] },
    { name: "Nanii Treats", category: "Street Food & North Indian", area: "Shivpuri", shortDescription: "Budget-friendly North Indian meals and snacks.", approxPriceForTwo: 200, tags: ["street-food", "north-indian", "budget"] },
    { name: "Desi Planet", category: "Fast Food & Momos", area: "Shivpuri", shortDescription: "Momos and fast food for quick bites.", approxPriceForTwo: 200, tags: ["fast-food", "momos", "street-food"] },
    { name: "Hotel That Baat", category: "Street Food / North Indian", area: "Shivpuri", shortDescription: "Street-style North Indian dishes and beverages.", approxPriceForTwo: 400, tags: ["north-indian", "street-food"] },
    { name: "Manoj Nashta Corner", category: "Street Food & Breakfast", area: "Shivpuri", shortDescription: "Popular for nashta items like poha, kachori and jalebi.", approxPriceForTwo: 150, tags: ["breakfast", "street-food", "snacks"] },
    { name: "Shiva's Cafe", category: "Cafe & Restaurant", area: "Physical College Road, Shivpuri", shortDescription: "Cafe-style hangout with coffee and snacks.", approxPriceForTwo: 400, tags: ["cafe", "coffee", "snacks", "college-crowd"] },
    { name: "Hum Tum Aur Chai", category: "Tea Cafe", area: "In front of Science College, Kamla Ganj", shortDescription: "Chai-focused cafe with light snacks.", approxPriceForTwo: 250, tags: ["chai", "cafe", "snacks"] },
    { name: "MP33 Cafe", category: "Cafe & Fast Food", area: "Shivpuri", shortDescription: "Urban cafe serving fast food, chaats and cheesy dishes.", approxPriceForTwo: 300, tags: ["cafe", "fast-food", "friends"] },
    { name: "Lakapse Cafe & Lounge", category: "Cafe", area: "Shivpuri", shortDescription: "Lounge-style cafe for coffee and snacks.", approxPriceForTwo: 400, tags: ["cafe", "coffee", "snacks"] },
    { name: "Foodose Cafe", category: "Cafe / Coffeehouse", area: "Shivpuri", shortDescription: "Coffeehouse with light cafe menu.", approxPriceForTwo: 350, tags: ["coffee", "cafe", "snacks"] },
    { name: "Suman Bakery", category: "Bakery & Cake Shop", area: "Lakshmibai Road / Krishnapuram Colony", shortDescription: "Cakes, pastries, pizza and baked snacks.", approxPriceForTwo: 300, tags: ["bakery", "cakes", "pastries"] },
    { name: "Mahakal Bakery", category: "Bakery & Cake Shop", area: "Ward 26, Mela Ground, Jawahar Colony", shortDescription: "Local bakery known for fresh morning products.", approxPriceForTwo: 250, tags: ["bakery", "cakes", "snacks"] },
    { name: "Mahadev Bakery", category: "Bakery & Cake Shop", area: "Indira Colony, Shivpuri", shortDescription: "Neighbourhood bakery for cakes and baked goods.", approxPriceForTwo: 250, tags: ["bakery", "cakes"] },
    { name: "Kapil Juice Store", category: "Juice & Shakes", area: "Shivpuri", shortDescription: "Fresh fruit juices and milkshakes.", approxPriceForTwo: 200, tags: ["juice", "shakes", "cold-drinks"] }
];


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
    const fromCities = new Set(busData.map(bus => bus.route_from));
    const toCities = new Set(busData.map(bus => bus.route_to));

    fromCities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        filterFrom.appendChild(option);
    });

    toCities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        filterTo.appendChild(option);
    });
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
        const card = document.createElement('div');
        card.className = 'bus-card';

        const departure = formatTime(bus.departure_time);
        const arrival = formatTimeString(bus.arrival_time);

        // Update dynamic text in card
        const viaText = translations[currentLang].via;
        const shareBtnText = translations[currentLang].share_btn;
        const daysText = bus.days_of_operation === 'Daily' ? translations[currentLang].daily : bus.days_of_operation;

        // WhatsApp Message
        const shareText = `🚌 *Bus Schedule Alert*\n\n*${bus.operator_name}*\nFrom: ${bus.route_from}\nTo: ${bus.route_to}\nTime: ${departure}\n${translations[currentLang].via}: ${bus.via}\n\nCheck full schedule on: https://shivpurilocal.in`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

        card.innerHTML = `
            <div class="bus-header">
                <div class="operator-info">
                    <span class="operator-name">${bus.operator_name}</span>
                    <span class="bus-type-badge">${bus.bus_type}</span>
                </div>
            </div>
            <div class="route-info">
                <div class="route-row">
                    <div class="route-point">
                        <span class="time">${departure}</span>
                        <span class="city">${bus.route_from}</span>
                    </div>
                    <div class="route-arrow">
                        <span class="duration-line"></span>
                        <span class="via-text">${viaText} ${bus.via}</span>
                    </div>
                    <div class="route-point">
                        <span class="time">${arrival}</span>
                        <span class="city">${bus.route_to}</span>
                    </div>
                </div>
            </div>
            <div class="bus-footer">
                <span class="distance">${bus.distance_km} km</span>
                <span class="operation-days">${daysText}</span>
            </div>
            <a href="${whatsappUrl}" target="_blank" class="share-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
                ${shareBtnText}
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

loadMoreBtn.addEventListener('click', () => {
    visibleCount += ITEMS_PER_PAGE;
    renderBuses(currentBuses, true);
});

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

    if (places.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No places found.</p>';
        return;
    }

    places.forEach(place => {
        const card = document.createElement('div');
        card.className = 'place-card';

        const tagsHTML = place.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('');
        const shareText = `📍 *${place.name}*\n\n${place.shortDescription}\n\nCategory: ${place.category}\nArea: ${place.area}\n\nExplore more on: https://shivpurilocal.in`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

        card.innerHTML = `
            <div class="place-header">
                <h3>${place.name}</h3>
                <span class="place-category">${place.category}</span>
            </div>
            <p class="place-area">📍 ${place.area}</p>
            <p class="place-description">${place.shortDescription}</p>
            <div class="place-tags">${tagsHTML}</div>
            <div class="card-actions">
                <a href="${whatsappUrl}" target="_blank" class="share-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg>
                    Share
                </a>
                <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name + ' Shivpuri')}" target="_blank" class="map-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg>
                    Map
                </a>
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

    if (food.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No restaurants found.</p>';
        return;
    }

    food.forEach(item => {
        const card = document.createElement('div');
        card.className = 'food-card';

        const tagsHTML = item.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('');
        const shareText = `🍽️ *${item.name}*\n\n${item.shortDescription}\n\nCategory: ${item.category}\nArea: ${item.area}\nPrice for 2: ₹${item.approxPriceForTwo}\n\nExplore more on: https://shivpurilocal.in`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

        card.innerHTML = `
            <div class="food-header">
                <h3>${item.name}</h3>
                <span class="food-price">₹${item.approxPriceForTwo} for 2</span>
            </div>
            <span class="food-category">${item.category}</span>
            <p class="food-area">📍 ${item.area}</p>
            <p class="food-description">${item.shortDescription}</p>
            <div class="food-tags">${tagsHTML}</div>
            <div class="card-actions">
                <a href="${whatsappUrl}" target="_blank" class="share-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg>
                    Share
                </a>
                <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.name + ' Shivpuri')}" target="_blank" class="map-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg>
                    Map
                </a>
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
            const currentFiltered = getCurrentFilteredBuses(); // Helper logic or re-apply filters
            // Re-apply filters to get current set, then render
            applyFilters(); // simplistic refresh
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
