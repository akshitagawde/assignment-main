select *
from orders
INSERT INTO orders
(orderid,customerid, employeeid, orderdate, requireddate, shipvia,
 freight, shipname, shipaddress, shipcity, shippostalcode,shipcountry)
VALUES (1226,'VINET', 4, '2017-09-16','2017-09-30',3,
        42.5, 'Vins et alcools Chevalier',
        '59 rue de l''Abbaye', 'Reims','51100', 'France');
		---------------------------
		SELECT *
FROM PRODUCTS
WHERE productname='Queso Cabrales'
productid=11;

INSERT INTO order_details
(orderid, productid, unitprice,quantity,discount)
VALUES (11078,11,14,20,0);
-------------------------
update
update orders 
set requireddate='2017-09-20',freight=50
where orderid=11708;
---------------
update order_details
set quantity=40,discount=0.5

where orderid=11078;
---------------------
delete
delete from order_details
where orderid=11078;

delete from orders
where orderid=11078;

--------------------
select into
select *
into suppliers_northamerica
from suppliers
where
country in ('USA','Canada');

select *
into orders_1997
from orders 
where orderdate between '1997-01-01' and '1997-12-31';

--------------------
insert into suppliers_northamerica
select * 
from suppliers
where country in('Brazil')
-----------------
insert into orders_1997
select * from orders
where orderdate between '2016-12-1' and '1996-12-31'
----------------
insert into employees
(firstname,lastname,employeeid,reportsto)
values ('bob','builder',68,5)
----------------
insert into orders(customerid,employeeid,requireddate,shippeddate,orderid)
values('VINET',6,'1994-08-29','1992-03-23',500)
-----------------------------
update products 
set unitprice =unitprice*1.2
where productid=1
returning productid,unitprice as newprice;

update order_details
set quantity=quantity*2
where orderid=10248 and productid=11
returning quantity as new_quq

-----------
delete from employees
where employeeid=50
returning *
------------
delete from orders
where orderid=500
returning *











		

