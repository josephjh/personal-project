update products
set product_name = ${product_name}, product_img = ${product_img}, price = ${price}, product_description = ${product_description}
where product_id = ${id};

select * from users
join products 
on products.user_id = users.user_id
where users.user_id = ${user_id}