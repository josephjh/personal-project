create table users (
    user_id serial primary key,
    username varchar(50) not null,
    email varchar(100) not null,
    password varchar(20)
)

create table products (
    product_id serial primary key,
    product_name varchar(150) not null,
    product_description varchar(254),
    price numeric not null,
    product_img text,
    user_id int references users(user_id)
)

create table cart (
    cart_id serial primary key,
    product_id integer references products(product_id),
    user_id integer references users(user_id),
    order_id integer references orders(order_id)
)

create table orders (
    order_id serial primary key
)

create table address (
    address_id serial primary key,
    user_id integer references users (user_id),
    street varchar(150) not null,
    city varchar(50) not null,
    state varchar(50),
    zipcode varchar(20)
)

