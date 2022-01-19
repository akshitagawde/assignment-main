functions

create or replace function fix_homepage() returns void as $$
update suppliers
set homepage='n/a'
where homepage is null
$$ language sql

select fix_homepage()

create or replace function default_photo() returns void as $$
update  employees
set photopath='n/a'
where photopath is null
$$ language sql

select default_photo()

create or replace function max_price() returns real as $$
select max(unitprice)
from products;
$$ language sql

select max_price()

create or replace function big_order() returns real as $$
select max(amount) from
(select sum(unitprice*quantity) as amount,orderid
 from order_details
 group by orderid) as totals
 $$ language sql

select big_order()

create or replace function customer_largest_order(cid bpchar) returns double precision as $$
select max(order_total)from
(select sum(quantity*unitprice) as order_total,orderid
from order_details
natural join orders
where customerid=cid
 group by orderid) as order_total
 $$ language sql

select customer_largest_order('ANATR')

create function  most_order(customerid bpchar) returns varchar(40) as $$
select productname
from products
where productid in (select productid from
(select sum(quantity )as total_orderd,productid
from order_details
natural join orders
where customerid=$1
group by productid
order by total_orderd desc
limit 1)as orderd_products);
$$ language sql

select most_order('CACTU')

function with composite parameter


create or replace function new_price(products ,increase_percent numeric)
returns double precision as $$
select $1.unitprice*increase_percent/100

$$ language sql

select productname,unitprice,new_price(products.*,120)
from products

create or replace function fullname(employees) returns varchar(62) as $$
select $1.title||''||$1.firstname||''||$1.lastname
$$ language sql

select fullname(employees.*),city,country
from employees

create or replace function new_hire() returns employees as $$
select *
from employees
order by hiredate asc
limit 1
$$ language sql

select new_hire()

select(new_hire()).lastname


create or replace function high_inve() returns products as $$
select* from products
order by(unitprice*unitsinstock)desc
limit 1
$$ language sql

select high_inve()

select productname(high_inve())

---function with output paramerter

create or replace function sum_product(x int,y int,out sum int,out product int)as $$
select x*y,x*y
$$ language sql

select sum_product(4,67)

create or replace function square(in x int,out squre int,out cube int)as $$
select x*x,x*x*x
$$ language sql

select square(3)

----function with defaulat value

create or replace function new_price(products,increase_percent numeric default 105)
returns double precision as $$
select $1.unitprice*increase_percent/100
$$ language sql

select productname,unitprice,new_price(products.*)
from products

create or replace function square(x int default 10,out square int,out cube int)as $$
select x*x,x*x*x
$$ language sql;

---using function as table source

select firstname,lastname,hiredate
from new_hire()

select productname,companyname
from high_inve() as h
join suppliers on h.supplierid=suppliers.supplierid;

----function that returns more than one row

create or replace function sold(total_sales real)
returns setof products as $$
select * from products
where productid in(
select productid from
(
select sum(quantity*unitprice),productid
from order_details
	group by productid
	having sum (quantity*unitprice)>total_sales)
	as qualified_products
	)
	$$ language sql


select productname,productid,supplierid
from sold(25000)






