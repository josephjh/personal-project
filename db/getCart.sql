select * from cart
join products 
on products.product_id = cart.product_id
where cart.user_id = ${user_id} and cart.order_id is null;