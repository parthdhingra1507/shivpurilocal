const busData = [
    { "operator_name": "DubeyJi Travels", "route_from": "Bhopal", "route_to": "Shivpuri", "via": "Biaora • Guna", "distance_km": 320, "departure_time": 1764914400000, "arrival_time": "14:00", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Bhopal–Shivpuri Via Biaora (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Bhopal", "route_to": "Shivpuri", "via": "Biaora • Guna", "distance_km": 320, "departure_time": 1764923400000, "arrival_time": "16:40", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Bhopal–Shivpuri Via Biaora (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Bhopal", "route_to": "Shivpuri", "via": "Biaora • Guna", "distance_km": 320, "departure_time": 1764936000000, "arrival_time": "20:15", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Bhopal–Shivpuri Via Biaora (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Bhopal", "route_to": "Shivpuri", "via": "Biaora • Guna", "distance_km": 320, "departure_time": 1764948600000, "arrival_time": "23:35", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Bhopal–Shivpuri Via Biaora (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Bhopal", "route_to": "Shivpuri", "via": "Biaora • Guna", "distance_km": 320, "departure_time": 1764957600000, "arrival_time": "02:00 (+1)", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Bhopal–Shivpuri Via Biaora (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Bhopal", "route_to": "Shivpuri", "via": "Biaora • Guna", "distance_km": 320, "departure_time": 1764972000000, "arrival_time": "05:50 (+1)", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Bhopal–Shivpuri Via Biaora (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Datia", "route_to": "Shivpuri", "via": "Dabra", "distance_km": 95, "departure_time": 1764914400000, "arrival_time": "08:10", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Datia–Shivpuri Via Dabra (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Datia", "route_to": "Shivpuri", "via": "Dabra", "distance_km": 95, "departure_time": 1764923400000, "arrival_time": "10:50", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Datia–Shivpuri Via Dabra (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Datia", "route_to": "Shivpuri", "via": "Dabra", "distance_km": 95, "departure_time": 1764936000000, "arrival_time": "14:25", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Datia–Shivpuri Via Dabra (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Datia", "route_to": "Shivpuri", "via": "Dabra", "distance_km": 95, "departure_time": 1764948600000, "arrival_time": "17:45", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Datia–Shivpuri Via Dabra (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Datia", "route_to": "Shivpuri", "via": "Dabra", "distance_km": 95, "departure_time": 1764957600000, "arrival_time": "20:10", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Datia–Shivpuri Via Dabra (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Datia", "route_to": "Shivpuri", "via": "Dabra", "distance_km": 95, "departure_time": 1764972000000, "arrival_time": "00:00 (+1)", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Datia–Shivpuri Via Dabra (AC Seater 2+2)" }, { "operator_name": "Sharad Travels", "route_from": "Guna", "route_to": "Shivpuri", "via": "Raghogarh • Badarwas", "distance_km": 103, "departure_time": 1764914400000, "arrival_time": "08:15", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Guna–Shivpuri Via Raghogarh (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Guna", "route_to": "Shivpuri", "via": "Raghogarh • Badarwas", "distance_km": 103, "departure_time": 1764923400000, "arrival_time": "10:55", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Guna–Shivpuri Via Raghogarh (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Guna", "route_to": "Shivpuri", "via": "Raghogarh • Badarwas", "distance_km": 103, "departure_time": 1764936000000, "arrival_time": "14:30", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Guna–Shivpuri Via Raghogarh (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Guna", "route_to": "Shivpuri", "via": "Raghogarh • Badarwas", "distance_km": 103, "departure_time": 1764948600000, "arrival_time": "17:50", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Guna–Shivpuri Via Raghogarh (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Guna", "route_to": "Shivpuri", "via": "Raghogarh • Badarwas", "distance_km": 103, "departure_time": 1764957600000, "arrival_time": "20:15", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Guna–Shivpuri Via Raghogarh (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Guna", "route_to": "Shivpuri", "via": "Raghogarh • Badarwas", "distance_km": 103, "departure_time": 1764972000000, "arrival_time": "00:05 (+1)", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Guna–Shivpuri Via Raghogarh (Non-AC Sleeper 2+1)" }, { "operator_name": "Hans Travels", "route_from": "Gwalior", "route_to": "Shivpuri", "via": "Mohna • Kolaras", "distance_km": 115, "departure_time": 1764914400000, "arrival_time": "08:30", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Gwalior–Shivpuri Via Mohna (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Gwalior", "route_to": "Shivpuri", "via": "Mohna • Kolaras", "distance_km": 115, "departure_time": 1764923400000, "arrival_time": "11:10", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Gwalior–Shivpuri Via Mohna (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Gwalior", "route_to": "Shivpuri", "via": "Mohna • Kolaras", "distance_km": 115, "departure_time": 1764936000000, "arrival_time": "14:45", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Gwalior–Shivpuri Via Mohna (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Gwalior", "route_to": "Shivpuri", "via": "Mohna • Kolaras", "distance_km": 115, "departure_time": 1764948600000, "arrival_time": "18:05", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Gwalior–Shivpuri Via Mohna (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Gwalior", "route_to": "Shivpuri", "via": "Mohna • Kolaras", "distance_km": 115, "departure_time": 1764957600000, "arrival_time": "20:30", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Gwalior–Shivpuri Via Mohna (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Gwalior", "route_to": "Shivpuri", "via": "Mohna • Kolaras", "distance_km": 115, "departure_time": 1764972000000, "arrival_time": "00:20 (+1)", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Gwalior–Shivpuri Via Mohna (AC Sleeper 2+1)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Indore", "route_to": "Shivpuri", "via": "Dewas • Guna", "distance_km": 360, "departure_time": 1764914400000, "arrival_time": "15:00", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Indore–Shivpuri Via Dewas (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Indore", "route_to": "Shivpuri", "via": "Dewas • Guna", "distance_km": 360, "departure_time": 1764923400000, "arrival_time": "17:40", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Indore–Shivpuri Via Dewas (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Indore", "route_to": "Shivpuri", "via": "Dewas • Guna", "distance_km": 360, "departure_time": 1764936000000, "arrival_time": "21:15", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Indore–Shivpuri Via Dewas (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Indore", "route_to": "Shivpuri", "via": "Dewas • Guna", "distance_km": 360, "departure_time": 1764948600000, "arrival_time": "00:35 (+1)", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Indore–Shivpuri Via Dewas (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Indore", "route_to": "Shivpuri", "via": "Dewas • Guna", "distance_km": 360, "departure_time": 1764957600000, "arrival_time": "03:00 (+1)", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Indore–Shivpuri Via Dewas (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Indore", "route_to": "Shivpuri", "via": "Dewas • Guna", "distance_km": 360, "departure_time": 1764972000000, "arrival_time": "06:50 (+1)", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Indore–Shivpuri Via Dewas (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Jaipur", "route_to": "Shivpuri", "via": "Dausa • Lalsot", "distance_km": 330, "departure_time": 1764914400000, "arrival_time": "14:00", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Jaipur–Shivpuri Via Dausa (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Jaipur", "route_to": "Shivpuri", "via": "Dausa • Lalsot", "distance_km": 330, "departure_time": 1764923400000, "arrival_time": "16:40", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Jaipur–Shivpuri Via Dausa (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Jaipur", "route_to": "Shivpuri", "via": "Dausa • Lalsot", "distance_km": 330, "departure_time": 1764936000000, "arrival_time": "20:15", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Jaipur–Shivpuri Via Dausa (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Jaipur", "route_to": "Shivpuri", "via": "Dausa • Lalsot", "distance_km": 330, "departure_time": 1764948600000, "arrival_time": "23:35", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Jaipur–Shivpuri Via Dausa (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Jaipur", "route_to": "Shivpuri", "via": "Dausa • Lalsot", "distance_km": 330, "departure_time": 1764957600000, "arrival_time": "02:00 (+1)", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Jaipur–Shivpuri Via Dausa (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Jaipur", "route_to": "Shivpuri", "via": "Dausa • Lalsot", "distance_km": 330, "departure_time": 1764972000000, "arrival_time": "05:50 (+1)", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Jaipur–Shivpuri Via Dausa (Non-AC Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Jhansi", "route_to": "Shivpuri", "via": "Dabra • Datia", "distance_km": 100, "departure_time": 1764914400000, "arrival_time": "08:20", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Jhansi–Shivpuri Via Dabra (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Jhansi", "route_to": "Shivpuri", "via": "Dabra • Datia", "distance_km": 100, "departure_time": 1764923400000, "arrival_time": "11:00", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Jhansi–Shivpuri Via Dabra (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Jhansi", "route_to": "Shivpuri", "via": "Dabra • Datia", "distance_km": 100, "departure_time": 1764936000000, "arrival_time": "14:35", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Jhansi–Shivpuri Via Dabra (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Jhansi", "route_to": "Shivpuri", "via": "Dabra • Datia", "distance_km": 100, "departure_time": 1764948600000, "arrival_time": "17:55", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Jhansi–Shivpuri Via Dabra (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Jhansi", "route_to": "Shivpuri", "via": "Dabra • Datia", "distance_km": 100, "departure_time": 1764957600000, "arrival_time": "20:20", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Jhansi–Shivpuri Via Dabra (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Jhansi", "route_to": "Shivpuri", "via": "Dabra • Datia", "distance_km": 100, "departure_time": 1764972000000, "arrival_time": "00:10 (+1)", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Jhansi–Shivpuri Via Dabra (Express Seater 3+2)" }, { "operator_name": "Hans Travels", "route_from": "Kota", "route_to": "Shivpuri", "via": "Baran", "distance_km": 260, "departure_time": 1764914400000, "arrival_time": "12:00", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Kota–Shivpuri Via Baran (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Kota", "route_to": "Shivpuri", "via": "Baran", "distance_km": 260, "departure_time": 1764923400000, "arrival_time": "14:40", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Kota–Shivpuri Via Baran (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Kota", "route_to": "Shivpuri", "via": "Baran", "distance_km": 260, "departure_time": 1764936000000, "arrival_time": "18:15", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Kota–Shivpuri Via Baran (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Kota", "route_to": "Shivpuri", "via": "Baran", "distance_km": 260, "departure_time": 1764948600000, "arrival_time": "21:35", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Kota–Shivpuri Via Baran (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Kota", "route_to": "Shivpuri", "via": "Baran", "distance_km": 260, "departure_time": 1764957600000, "arrival_time": "00:00 (+1)", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Kota–Shivpuri Via Baran (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Kota", "route_to": "Shivpuri", "via": "Baran", "distance_km": 260, "departure_time": 1764972000000, "arrival_time": "03:50 (+1)", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Kota–Shivpuri Via Baran (AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Sheopur", "route_to": "Shivpuri", "via": "Pohri • Karahal", "distance_km": 120, "departure_time": 1764914400000, "arrival_time": "09:20", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Sheopur–Shivpuri Via Pohri (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Sheopur", "route_to": "Shivpuri", "via": "Pohri • Karahal", "distance_km": 120, "departure_time": 1764923400000, "arrival_time": "12:00", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Sheopur–Shivpuri Via Pohri (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Sheopur", "route_to": "Shivpuri", "via": "Pohri • Karahal", "distance_km": 120, "departure_time": 1764936000000, "arrival_time": "15:35", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Sheopur–Shivpuri Via Pohri (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Sheopur", "route_to": "Shivpuri", "via": "Pohri • Karahal", "distance_km": 120, "departure_time": 1764948600000, "arrival_time": "18:55", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Sheopur–Shivpuri Via Pohri (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Sheopur", "route_to": "Shivpuri", "via": "Pohri • Karahal", "distance_km": 120, "departure_time": 1764957600000, "arrival_time": "21:20", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Sheopur–Shivpuri Via Pohri (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Sheopur", "route_to": "Shivpuri", "via": "Pohri • Karahal", "distance_km": 120, "departure_time": 1764972000000, "arrival_time": "01:10 (+1)", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Sheopur–Shivpuri Via Pohri (AC Seater 2+2)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Shivpuri", "route_to": "Bhopal", "via": "Guna • Biaora", "distance_km": 320, "departure_time": 1764914400000, "arrival_time": "14:00", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Shivpuri–Bhopal Via Guna (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Shivpuri", "route_to": "Bhopal", "via": "Guna • Biaora", "distance_km": 320, "departure_time": 1764923400000, "arrival_time": "16:40", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Shivpuri–Bhopal Via Guna (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Shivpuri", "route_to": "Bhopal", "via": "Guna • Biaora", "distance_km": 320, "departure_time": 1764936000000, "arrival_time": "20:15", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Shivpuri–Bhopal Via Guna (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Shivpuri", "route_to": "Bhopal", "via": "Guna • Biaora", "distance_km": 320, "departure_time": 1764948600000, "arrival_time": "23:35", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Shivpuri–Bhopal Via Guna (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Shivpuri", "route_to": "Bhopal", "via": "Guna • Biaora", "distance_km": 320, "departure_time": 1764957600000, "arrival_time": "02:00 (+1)", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Shivpuri–Bhopal Via Guna (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Shivpuri", "route_to": "Bhopal", "via": "Guna • Biaora", "distance_km": 320, "departure_time": 1764972000000, "arrival_time": "05:50 (+1)", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Shivpuri–Bhopal Via Guna (Express Seater 3+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Shivpuri", "route_to": "Datia", "via": "Dabra", "distance_km": 95, "departure_time": 1764914400000, "arrival_time": "08:10", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Shivpuri–Datia Via Dabra (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Shivpuri", "route_to": "Datia", "via": "Dabra", "distance_km": 95, "departure_time": 1764923400000, "arrival_time": "10:50", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Shivpuri–Datia Via Dabra (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Shivpuri", "route_to": "Datia", "via": "Dabra", "distance_km": 95, "departure_time": 1764936000000, "arrival_time": "14:25", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Shivpuri–Datia Via Dabra (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Shivpuri", "route_to": "Datia", "via": "Dabra", "distance_km": 95, "departure_time": 1764948600000, "arrival_time": "17:45", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Shivpuri–Datia Via Dabra (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Shivpuri", "route_to": "Datia", "via": "Dabra", "distance_km": 95, "departure_time": 1764957600000, "arrival_time": "20:10", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Shivpuri–Datia Via Dabra (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Shivpuri", "route_to": "Datia", "via": "Dabra", "distance_km": 95, "departure_time": 1764972000000, "arrival_time": "00:00 (+1)", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Shivpuri–Datia Via Dabra (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Shivpuri", "route_to": "Guna", "via": "Badarwas • Raghogarh", "distance_km": 103, "departure_time": 1764914400000, "arrival_time": "08:15", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Shivpuri–Guna Via Badarwas (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Shivpuri", "route_to": "Guna", "via": "Badarwas • Raghogarh", "distance_km": 103, "departure_time": 1764923400000, "arrival_time": "10:55", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Shivpuri–Guna Via Badarwas (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Shivpuri", "route_to": "Guna", "via": "Badarwas • Raghogarh", "distance_km": 103, "departure_time": 1764936000000, "arrival_time": "14:30", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Shivpuri–Guna Via Badarwas (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Shivpuri", "route_to": "Guna", "via": "Badarwas • Raghogarh", "distance_km": 103, "departure_time": 1764948600000, "arrival_time": "17:50", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Shivpuri–Guna Via Badarwas (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Shivpuri", "route_to": "Guna", "via": "Badarwas • Raghogarh", "distance_km": 103, "departure_time": 1764957600000, "arrival_time": "20:15", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Shivpuri–Guna Via Badarwas (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Shivpuri", "route_to": "Guna", "via": "Badarwas • Raghogarh", "distance_km": 103, "departure_time": 1764972000000, "arrival_time": "00:05 (+1)", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Shivpuri–Guna Via Badarwas (AC Seater 2+2)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Shivpuri", "route_to": "Gwalior", "via": "Kolaras • Mohna", "distance_km": 115, "departure_time": 1764914400000, "arrival_time": "08:30", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Shivpuri–Gwalior Via Kolaras (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Shivpuri", "route_to": "Gwalior", "via": "Kolaras • Mohna", "distance_km": 115, "departure_time": 1764923400000, "arrival_time": "11:10", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Shivpuri–Gwalior Via Kolaras (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Shivpuri", "route_to": "Gwalior", "via": "Kolaras • Mohna", "distance_km": 115, "departure_time": 1764936000000, "arrival_time": "14:45", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Shivpuri–Gwalior Via Kolaras (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Shivpuri", "route_to": "Gwalior", "via": "Kolaras • Mohna", "distance_km": 115, "departure_time": 1764948600000, "arrival_time": "18:05", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Shivpuri–Gwalior Via Kolaras (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Shivpuri", "route_to": "Gwalior", "via": "Kolaras • Mohna", "distance_km": 115, "departure_time": 1764957600000, "arrival_time": "20:30", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Shivpuri–Gwalior Via Kolaras (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Shivpuri", "route_to": "Gwalior", "via": "Kolaras • Mohna", "distance_km": 115, "departure_time": 1764972000000, "arrival_time": "00:20 (+1)", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Shivpuri–Gwalior Via Kolaras (AC Seater 2+2)" }, { "operator_name": "Sharad Travels", "route_from": "Shivpuri", "route_to": "Indore", "via": "Guna • Dewas", "distance_km": 360, "departure_time": 1764914400000, "arrival_time": "15:00", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Shivpuri–Indore Via Guna (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Shivpuri", "route_to": "Indore", "via": "Guna • Dewas", "distance_km": 360, "departure_time": 1764923400000, "arrival_time": "17:40", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Shivpuri–Indore Via Guna (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Shivpuri", "route_to": "Indore", "via": "Guna • Dewas", "distance_km": 360, "departure_time": 1764936000000, "arrival_time": "21:15", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Shivpuri–Indore Via Guna (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Shivpuri", "route_to": "Indore", "via": "Guna • Dewas", "distance_km": 360, "departure_time": 1764948600000, "arrival_time": "00:35 (+1)", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Shivpuri–Indore Via Guna (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Shivpuri", "route_to": "Indore", "via": "Guna • Dewas", "distance_km": 360, "departure_time": 1764957600000, "arrival_time": "03:00 (+1)", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Shivpuri–Indore Via Guna (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Shivpuri", "route_to": "Indore", "via": "Guna • Dewas", "distance_km": 360, "departure_time": 1764972000000, "arrival_time": "06:50 (+1)", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Shivpuri–Indore Via Guna (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Shivpuri", "route_to": "Jaipur", "via": "Lalsot • Dausa", "distance_km": 330, "departure_time": 1764914400000, "arrival_time": "14:00", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Shivpuri–Jaipur Via Lalsot (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Shivpuri", "route_to": "Jaipur", "via": "Lalsot • Dausa", "distance_km": 330, "departure_time": 1764923400000, "arrival_time": "16:40", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Shivpuri–Jaipur Via Lalsot (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Shivpuri", "route_to": "Jaipur", "via": "Lalsot • Dausa", "distance_km": 330, "departure_time": 1764936000000, "arrival_time": "20:15", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Shivpuri–Jaipur Via Lalsot (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Shivpuri", "route_to": "Jaipur", "via": "Lalsot • Dausa", "distance_km": 330, "departure_time": 1764948600000, "arrival_time": "23:35", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Shivpuri–Jaipur Via Lalsot (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Shivpuri", "route_to": "Jaipur", "via": "Lalsot • Dausa", "distance_km": 330, "departure_time": 1764957600000, "arrival_time": "02:00 (+1)", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Shivpuri–Jaipur Via Lalsot (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Shivpuri", "route_to": "Jaipur", "via": "Lalsot • Dausa", "distance_km": 330, "departure_time": 1764972000000, "arrival_time": "05:50 (+1)", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Shivpuri–Jaipur Via Lalsot (AC Seater 2+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Shivpuri", "route_to": "Jhansi", "via": "Datia • Dabra", "distance_km": 100, "departure_time": 1764914400000, "arrival_time": "08:20", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Shivpuri–Jhansi Via Datia (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Shivpuri", "route_to": "Jhansi", "via": "Datia • Dabra", "distance_km": 100, "departure_time": 1764923400000, "arrival_time": "11:00", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Shivpuri–Jhansi Via Datia (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Shivpuri", "route_to": "Jhansi", "via": "Datia • Dabra", "distance_km": 100, "departure_time": 1764936000000, "arrival_time": "14:35", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Shivpuri–Jhansi Via Datia (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Shivpuri", "route_to": "Jhansi", "via": "Datia • Dabra", "distance_km": 100, "departure_time": 1764948600000, "arrival_time": "17:55", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Shivpuri–Jhansi Via Datia (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Shivpuri", "route_to": "Jhansi", "via": "Datia • Dabra", "distance_km": 100, "departure_time": 1764957600000, "arrival_time": "20:20", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Shivpuri–Jhansi Via Datia (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Shivpuri", "route_to": "Jhansi", "via": "Datia • Dabra", "distance_km": 100, "departure_time": 1764972000000, "arrival_time": "00:10 (+1)", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Shivpuri–Jhansi Via Datia (AC Sleeper 2+1)" }, { "operator_name": "Kamla Travels (Sutra Sewa)", "route_from": "Shivpuri", "route_to": "Kota", "via": "Baran", "distance_km": 260, "departure_time": 1764914400000, "arrival_time": "12:00", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Kamla Shivpuri–Kota Via Baran (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Shivpuri", "route_to": "Kota", "via": "Baran", "distance_km": 260, "departure_time": 1764923400000, "arrival_time": "14:40", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Shivpuri–Kota Via Baran (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Shivpuri", "route_to": "Kota", "via": "Baran", "distance_km": 260, "departure_time": 1764936000000, "arrival_time": "18:15", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Shivpuri–Kota Via Baran (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Shivpuri", "route_to": "Kota", "via": "Baran", "distance_km": 260, "departure_time": 1764948600000, "arrival_time": "21:35", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Shivpuri–Kota Via Baran (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Shivpuri", "route_to": "Kota", "via": "Baran", "distance_km": 260, "departure_time": 1764957600000, "arrival_time": "00:00 (+1)", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Shivpuri–Kota Via Baran (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Shivpuri", "route_to": "Kota", "via": "Baran", "distance_km": 260, "departure_time": 1764972000000, "arrival_time": "03:50 (+1)", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Shivpuri–Kota Via Baran (AC Seater 2+2)" }, { "operator_name": "Hans Travels", "route_from": "Shivpuri", "route_to": "Sheopur", "via": "Karahal • Pohri", "distance_km": 120, "departure_time": 1764914400000, "arrival_time": "09:20", "days_of_operation": "Daily", "bus_type": "Non-AC Sleeper 2+1", "name_plate_text": "Hans Shivpuri–Sheopur Via Karahal (Non-AC Sleeper 2+1)" }, { "operator_name": "Jain Bus Service", "route_from": "Shivpuri", "route_to": "Sheopur", "via": "Karahal • Pohri", "distance_km": 120, "departure_time": 1764923400000, "arrival_time": "12:00", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "Jain Shivpuri–Sheopur Via Karahal (AC Sleeper 2+1)" }, { "operator_name": "Sharad Travels", "route_from": "Shivpuri", "route_to": "Sheopur", "via": "Karahal • Pohri", "distance_km": 120, "departure_time": 1764936000000, "arrival_time": "15:35", "days_of_operation": "Daily", "bus_type": "Express Seater 3+2", "name_plate_text": "Sharad Shivpuri–Sheopur Via Karahal (Express Seater 3+2)" }, { "operator_name": "Raj Ratan Tours & Travels", "route_from": "Shivpuri", "route_to": "Sheopur", "via": "Karahal • Pohri", "distance_km": 120, "departure_time": 1764948600000, "arrival_time": "18:55", "days_of_operation": "Daily", "bus_type": "Volvo B11R Sleeper 2+1", "name_plate_text": "Raj Shivpuri–Sheopur Via Karahal (Volvo B11R Sleeper 2+1)" }, { "operator_name": "Maa Pitambra Travels", "route_from": "Shivpuri", "route_to": "Sheopur", "via": "Karahal • Pohri", "distance_km": 120, "departure_time": 1764957600000, "arrival_time": "21:20", "days_of_operation": "Daily", "bus_type": "AC Seater 2+2", "name_plate_text": "Maa Shivpuri–Sheopur Via Karahal (AC Seater 2+2)" }, { "operator_name": "DubeyJi Travels", "route_from": "Shivpuri", "route_to": "Sheopur", "via": "Karahal • Pohri", "distance_km": 120, "departure_time": 1764972000000, "arrival_time": "01:10 (+1)", "days_of_operation": "Daily", "bus_type": "AC Sleeper 2+1", "name_plate_text": "DubeyJi Shivpuri–Sheopur Via Karahal (AC Sleeper 2+1)" }
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

// DOM elements will be queried inside initTransport() when DOM is ready


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
    const filterFrom = document.getElementById('filter-from');
    const filterTo = document.getElementById('filter-to');

    if (!filterFrom || !filterTo) return;

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
    const filterFrom = document.getElementById('filter-from');
    if (!filterFrom) return;

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
    const filterTo = document.getElementById('filter-to');
    if (!filterTo) return;

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
// --- PAGE UPDATES FOR LANGUAGE ---
// --- PAGE UPDATES FOR LANGUAGE ---
function updateTransportLanguage(lang) {
    const filterFrom = document.getElementById('filter-from');
    const filterTo = document.getElementById('filter-to');
    const filterTime = document.getElementById('filter-time');
    const resetBtn = document.getElementById('reset-btn');
    const loadMoreBtn = document.getElementById('load-more-btn');

    const isHi = lang === 'hi';
    const t = window.i18n.translations ? window.i18n.translations[lang] : {};

    // Update Filters
    if (filterFrom && filterFrom.options.length > 0) filterFrom.options[0].text = window.i18n.t('filter_from');
    if (filterTo && filterTo.options.length > 0) filterTo.options[0].text = window.i18n.t('filter_to');

    if (filterTime && filterTime.options.length > 0) {
        filterTime.options[0].text = window.i18n.t('filter_time');
        filterTime.options[1].text = window.i18n.t('filter_time_0_6');
        filterTime.options[2].text = window.i18n.t('filter_time_6_12');
        filterTime.options[3].text = window.i18n.t('filter_time_12_18');
        filterTime.options[4].text = window.i18n.t('filter_time_18_24');
    }

    // Update static buttons
    if (resetBtn) resetBtn.textContent = window.i18n.t('reset_btn');
    if (loadMoreBtn) loadMoreBtn.textContent = window.i18n.t('load_more');

    // Re-render buses
    renderBuses(currentBuses.length > 0 ? currentBuses : busData);
}

function renderBuses(buses, append = false) {
    const grid = document.getElementById('schedule-grid');
    const loadMoreContainer = document.getElementById('load-more-container');
    if (!grid) return;

    if (!append) {
        grid.innerHTML = '';
        visibleCount = ITEMS_PER_PAGE;
        currentBuses = buses;
    }

    if (buses.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No buses found matching your search.</p>';
        if (loadMoreContainer) loadMoreContainer.style.display = 'none';
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
        const isHi = window.i18n.lang === 'hi';

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
        const shareText = `🚌 *Bus Schedule Alert*\n\n*${bus.operator_name}*\nFrom: ${from}\nTo: ${to}\nTime: ${departure}\n${isHi ? "द्वारा" : "Via"}: ${via}\n\nCheck full schedule on: https://shivpurilocal.in/transport`;
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
            <a href="${whatsappUrl}" target="_blank" class="share-btn">${isHi ? "साझा करें" : "Share"}</a>
        `;
        grid.appendChild(card);
    });
}

function applyFilters() {
    const filterFrom = document.getElementById('filter-from');
    const filterTo = document.getElementById('filter-to');
    const filterTime = document.getElementById('filter-time');
    const resetBtn = document.getElementById('reset-btn');

    if (!filterFrom || !filterTo || !filterTime) return;

    const fromVal = filterFrom.value;
    const toVal = filterTo.value;
    const timeVal = filterTime.value;

    // Toggle Reset Button State
    if (resetBtn) {
        const hasFilters = fromVal !== "" || toVal !== "" || timeVal !== "";
        if (hasFilters) {
            resetBtn.textContent = window.i18n.t('reset_btn_reset');

            resetBtn.classList.add("reset-mode");
        } else {
            resetBtn.textContent = window.i18n.t('reset_btn');

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

// Render Places - REMOVED

// Render Food - REMOVED

// Show Category - REMOVED

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

function initTransport() {
    // Re-grab DOM elements as they are new after swap
    const filterFrom = document.getElementById('filter-from');
    const filterTo = document.getElementById('filter-to');
    const filterTime = document.getElementById('filter-time');
    const resetBtn = document.getElementById('reset-btn');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const grid = document.getElementById('schedule-grid'); // Update global if needed, but better to use local or re-query

    if (filterFrom) {
        populateDropdowns();
        renderBuses(busData);

        filterFrom.addEventListener('change', applyFilters);
        filterTo.addEventListener('change', applyFilters);
        filterTime.addEventListener('change', applyFilters);

        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                if (resetBtn.classList.contains('reset-mode')) {
                    filterFrom.value = '';
                    filterTo.value = '';
                    filterTime.value = '';
                    applyFilters();
                } else {
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

        // Initial Lang Update
        updateTransportLanguage(window.i18n.lang);
    }
}

// Listen for Router Page Load
document.addEventListener('page-loaded', (e) => {
    const page = e.detail.page;
    if (page === '/transport' || page === '/transport.html' || page.includes('/transport')) {
        console.log('[Transport] page-loaded event triggered for:', page);
        initTransport();
    }
});

// Listen for Language Changes
window.addEventListener('lang-changed', (e) => {
    // Only update if we are on transport page (simple check: if filterFrom exists)
    if (document.getElementById('filter-from')) {
        updateTransportLanguage(e.detail.lang);
    }
});

// Initial Check (in case loaded directly) - Wait for DOM
function tryInitTransport() {
    const path = window.location.pathname;
    if (path === '/transport' || path === '/transport.html') {
        console.log('[Transport] Attempting to initialize');
        // Use requestAnimationFrame to ensure DOM is fully rendered
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                initTransport();
            });
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', tryInitTransport);
} else {
    // DOM already loaded, but still use RAF to ensure rendering is complete
    tryInitTransport();
}

