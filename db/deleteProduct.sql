delete from products
where product_id = ${product_id};

select * from users
join products 
on products.user_id = users.user_id
where users.user_id = ${user_id}