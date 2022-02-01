const db = require('../db/models');
           const Cart = db.Cart;

           //select * from users => findAll

           exports.findAll=(req,res)=>{
            Cart.findAll()
           .then(data=>res.json(data))
           .catch(err=>{
           res.status(500)
          .send({message:err.message || 'something want wrong'})
           });
          };

        // 2. seelct * from users where id=?=>findByPK

          exports.findByPk=(req,resp)=>{
          const id=parseInt(req.params.id);
          Cart.findByPk(id)
         .then(data=>resp.json(data))
         .catch(err=>{
          resp.status(500)
             .send({message:err.message||
              `Something went wrong`})
         });
        };


       //insert into users (firstName,lastName,createdAt,updateAt) values(?,?,?,?) =>create(user)

        exports.create=(req,res)=>{
        // if(!req.body.categoryName){
        // res.status(400).send({
        // message: "Content can not be empty!"
        // });
        //   return;
        // }

       const newCart ={
        ProductId : req.body.ProductId,
        productName : req.body.productName,
        Password : req.body.Password,
        Quantity : req.body.Quantity,
        TotalAmount : req.body.TotalAmount,
       createdAt:new Date(),
      updatedAt:new Date()
      }

      Cart.create(newCart)
     .then(data=>res.json(data))
     .catch(err=>{
       res.status(500)
       .send({message:err.message || 'Something went wrong'});
      });
     };

     //update users set firstName=?, lastName=?,createdAt=?,updateAt=?

     exports.update=(req,res)=>{
     const id = req.params.id;
     Cart.update(req.body, { where: { id: id } })
			.then(num => {
				if (num == 1) {
				res.send({
					message: `Cart with id ${id} updated successfully.`
				});
				} else {
				res.send({
					message: `Cannot update Cart with id=${id}. Maybe Cart was not found or req.body is empty!`
				});
				}
			})
			.catch((err) => {
				res.status(500).send({
					message: err.message || " Some error retriving User data"
				})
			})
           };


       //delete from people where id=?

       exports.delete = (req, res) => {
       const id = req.params.id;
       Cart.destroy({ where: { id: id } })
      .then(num => {
      if (num == 1) {
        res.send({ message: `Cart with id=${id} deleted successfully!` });
      } else {
        res.send({ message: `Cannot delete Cart with id=${id}. Maybe User was not found!` });
      }
      })
      .catch((err) => {
      res.status(500).send({
        message: err.message || " Could not delete User with id=" + id
      });
     });
    };

    exports.findCartByProduct=(req,resp)=>{
      const id=parseInt(req.params.id);
      Cart.findAll({where: { ProductId: id}})
     .then(data=>resp.json(data))
     .catch(err=>{
      resp.status(500)
         .send({message:err.message||
          `Something went wrong`})
     });
    };
