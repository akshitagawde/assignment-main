create unique index idx_employees_id
on employees (employeeid);

create unique index idx_orders_customerid_orderid
on orders(customerid,orderid);

------------------
drop index
drop index idx_employees_id;

drop index idx_orders_customerid_orderid;
------------------------------------


create table performance1(
	id numeric,
	location text
)
insert into performance1(location)
select md5(random()::text)from generate_series(1,100000)
explain analyze select * from performance1
where id=10000

analyze performance1;
------------------------------------
set max_parallel_workers_per_gather=0;

explain select *
from performance1
where location like 'abs'
--------------------
select pg_relation_size('performance1'),
pg_size_pretty(pg_relation_size('performance1'));

select relpages, pg_relation_size('performance1')/8192
from pg_class
where relname='performance1'
--------
show seq_page_cost;
-----------
select relpages, current_setting('seq_page_cost')::numeric
from pg_class
where relname='performance1'

================

select relpages, current_setting('seq_page_cost')::numeric
reltuples
from pg_class

where relname='performance1'
----------

select relpages, current_setting('seq_page_cost')::numeric+
(reltuples+(current_setting('cpu_tuple_cost')::numeric+
		   current_setting('cpu_operator_cost')::numeric))
from pg_class
 where relname='performance1'
 --------------------------
alter table performance1
add column name text;

update performance1
set name=md5(location);

explain analyze select *
from performance1
where location like 'df%' and name like 'df%'

--------
create index idx_perormance1_location_name
on performance1(location,name);

create index idx_person_fullname
on person.person((firstname||''||lastname));
explain  select *
from person.person
where firstname||'' || lastname='Terri Duffy'


