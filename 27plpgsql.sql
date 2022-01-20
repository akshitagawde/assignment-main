---pl/pgsql function

drop routine if exists max_price();

create or replace function max_price() returns double precision as $$
begin
return max(unitprice)
from products;
end;
$$ language plpgsql;

select max_price();

 drop routine if exists big_order();
 
 create or replace function big_order() returns real as $$
 begin
 return max(amount)from
 (select sum(unitprice*quantity)as amount,orderid
 from order_details
  group by orderid
 ) as totals;

 end;
 $$ language plpgsql;
 
 select big_order()
 
 ------------------handaling function with output variables
 

create or replace function sum_product(x int, y int,out sum int,out product int) as $$
begin
sum:=x+y;
product:=x*y;
return;
end;
$$ language plpgsql

select sum_product(2,4)

drop routine if exists square(x int,out square int,out cube int);
create or replace function square(x int,out square int,out cube int)  as $$
begin
square:=x*x;
cube:=x*x*x;
return;
end;
$$ language plpgsql;

select square(5)


-----------------------returning query result

create or replace function sold(total_sales real)
returns setof products as $$
begin
return query select * from products
where productid in(select productid from
				  (select sum(quantity*unitprice),productid from order_details
				  group by productid
				  having sum (quantity*unitprice)>total_sales)as qualified_products);
				  end;
				  $$ language plpgsql;
				  
				  
				  select (sold(25000)).*;
				  
				  
create or replace function suppliers_reorder()
returns setof suppliers as $$
begin
return query select * from suppliers
where supplierid in (
select supplierid from products
where unitsinstock *unitsonorder<reorderlevel);
end;
$$ language plpgsql 

select suppliers_reorder();

----------------------declaring variables

create or replace function middle_priced() returns setof products as $$
declare 
avg_price real;
bottom_price real;
top_price real;
begin
select avg(unitprice)into avg_price
from products;

bottom_price:=avg_price*0.75;
top_price:=avg_price*1.25;

return query  select * from products
where unitprice between bottom_price and top_price;
end;
$$ language plpgsql

select middle_priced()

create or replace function avg_order () returns setof orders as $$
declare
avg_orders real;
bottom_order real;
top_order real;
begin
select avg(amount_ordered)into avg_orders from
(
select sum(unitprice*quantity)as amount_ordered,orderid
from order_details
group by orderid)as order_details;

bottom_order:=avg_orders *0.75;
top_order:=avg_orders*1.50;

return query select * from orders
where orderid in(
select orderid from(
select sum(unitprice*quantity)as amount_ordered,orderid
from order_details
group by orderid
having sum (unitprice*quantity)between bottom_order and top_order)
as order_amount);
end;
$$ language plpgsql

select avg_order()

---------------looping through query result
create or replace function reports_to(in eid smallint,out employeeid smallint,out reportsto smallint)
returns setof record as $$

with recursive reports_to(employeeid,reportsto)as (
select employeeid,reportsto from employees
where employeeid=eid
union all
select manager.employeeid,manager.reportsto
from employees as manager
join reports_to on reports_to.reportsto=manager.employeeid)
select * from reports_to;
$$ language sql;

select * from  reports_to(218);


create or replace function avg_square()returns double precision as $$
declare
square_tot int:=0;
tot_count int:=0;
product record;
begin
for product in select * from products loop
tot_count:=tot_count+1;
square_tot:=square_tot+(product.unitprice*product.unitprice);
end loop ;
return square_tot/tot_count;
end;
$$ language plpgsql;

select avg_square();

---------------------using if then statement

create or replace function product_cat(price real)returns text as $$
begin
if price>50.0 then
return 'luxury';
elseif price>25.0 then
return 'comsumer';
else 
return 'bargain';
END IF;
end;
$$ language plpgsql;

select product_cat(56);

create or replace function time_year(date_check timestamp) returns text as $$
declare
month_year int:=extract(month from date_check);
begin
if month_year>=3 and month_year<=5 then
return 'spring';
elseif month_year>=6 and month_year<=8 then
return 'summer';
elseif month_year>=9 and month_year<=11 then
return 'fall';
else
return 'winter';
end if;
end;
$$ language plpgsql;

select time_year(orderdate) from orders;

------returning query result continue

CREATE OR REPLACE FUNCTION sold_more_than(total_sales real)
RETURNS SETOF products AS $$
BEGIN

 RETURN QUERY SELECT * FROM products
 WHERE productid IN (
	 SELECT productid FROM
 	 (SELECT SUM(quantity*unitprice),productid
	 FROM order_details
	 GROUP BY productid
	 HAVING SUM(quantity*unitprice) > total_sales) as qualified_products
 	);

  IF NOT FOUND THEN
  	RAISE EXCEPTION 'Nn products had sales higher than %.', $1;
  END IF;

  RETURN;
END;
$$ LANGUAGE plpgsql;

SELECT productname, productid, supplierid
FROM sold_more_than(25000);

CREATE OR REPLACE FUNCTION after_christmas_sale() RETURNS SETOF products AS $$
DECLARE
	product record;
BEGIN
	FOR product IN
		SELECT * FROM products
	LOOP
		IF product.categoryid IN (1,4,8) THEN
			product.unitprice = product.unitprice * .80;
		ELSIF product.categoryid IN (2,3,7) THEN
			product.unitprice = product.unitprice * .75;
		ELSE
			product.unitprice = product.unitprice * 1.10;
		END IF;
		RETURN NEXT product;
	END LOOP;

	RETURN;

END;
$$ LANGUAGE plpgsql;

SELECT * FROM after_christmas_sale();
-------------------------



