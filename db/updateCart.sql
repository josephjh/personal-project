UPDATE cart
SET order_id =${order_id}
WHERE order_id is null and user_id = ${user_id}