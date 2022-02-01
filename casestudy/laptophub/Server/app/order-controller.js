const db = require('../db/models');
           const Order = db.Order;

           //select * from users => findAll

           exports.findAll=(req,res)=>{
            const customerId = req.params.customerId;
            Order.findAll({ where: { Customer_Id: customerId }})
           .then(data=>res.json(data))
           .catch(err=>{
           res.status(500)
          .send({message:err.message || 'something want wrong'})
           });
          };

        // 2. seelct * from users where id=?=>findByPK

          exports.findByPk=(req,resp)=>{
          const id=parseInt(req.params.id);
          Order.findByPk(id)
         .then(data=>resp.json(data))
         .catch(err=>{
          resp.status(500)
             .send({message:err.message||
              `Something went wrong`})
         });
        };


       //insert into users (firstName,lastName,createdAt,updateAt) values(?,?,?,?) =>create(user)


       exports.create=(req,res)=>{

        if(!req.body.productId){

        res.status(400).send({

        message: "Content can not be empty!"

        });

          return;

        }



       const newOrder ={

        Product_Id : req.body.productId,

        Customer_Id : req.body.customerId,

        Order_date : req.body.orderDate,

        Order_Address : req.body.orderAddress,

        Total_Amount : req.body.totalAmount,

        Status:req.body.status,

        createdAt:new Date(),

        updatedAt:new Date()

      }



      Order.create(newOrder)

     .then(data=>res.json(data))

     .catch(err=>{

       res.status(500)

       .send({message:err.message || 'Something went wrong'});

      });

     };

     //update users set firstName=?, lastName=?,createdAt=?,updateAt=?

     exports.update=(req,res)=>{
     const id = req.params.id;
     Order.update(req.body, { where: { id: id } })
			.then(num => {
				if (num == 1) {
				res.send({
					message: `Order with id ${id} updated successfully.`
				});
				} else {
				res.send({
					message: `Cannot  Order with id=${id}. Maybe Order was not found or req.body is empty!`
				});
				}
			})
			.catch((err) => {
				res.status(500).send({
					message: err.message || " Some error retriving Product data"
				})
			})
           };


       //delete from people where id=?

       exports.delete = (req, res) => {
       const id = req.params.id;
       Order.destroy({ where: { id: id } })
      .then(num => {
      if (num == 1) {
        res.send({ message: `Order with id=${id} deleted successfully!` });
      } else {
        res.send({ message: `Cannot delete Order with id=${id}. Maybe User was not found!` });
      }
      })
      .catch((err) => {
      res.status(500).send({
        message: err.message || " Could not delete Order with id=" + id
      });
     });
    };
