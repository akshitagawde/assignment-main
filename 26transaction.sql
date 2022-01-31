----simple transcation cotrols

start transaction;

update products
set reorderlevel = reorderlevel-5;

select count(*)
from products
where unitsinstock + unitsonorder<reorderlevel;
commit;

------------------------
start transaction;
update orders
set requireddate=requireddate +interval '1 day'
where orderdate between '1997-12-01' and '1997-12-31';

update orders
set requireddate =requireddate-interval '1 day'

where orderdate between '1997-12-01' and '1997-11-30';
commit;


--rollbacks & savepoints


start transaction;

update  orders 
set orderdate=orderdate+interval '1 year';

rollback;

-------------------
start transaction;
insert into employees(employeeid,lastname,firstname,title,birthdate,hiredate)
values(501,'gawade','akshita','ceo','1994-08-29','2021-11-22');
savepoint inserted_employee;

update employees
set birthdate='2029-09-09';

rollback to inserted_employee;

update employees
set birthdate='1994-08-29'
where employeeid=501;

commit;

select * from employees where employeeid=501

-----------------------------
sql transcation isolation




