select * from cart
join products on products.product_id = cart.product_id
where user_id = ${user_id} and order_id is null;