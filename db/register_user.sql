insert into users(username, email, password, first_name, last_name)
values(${username}, ${email}, ${password}, $(first_name), $(first_name))