const db = require('../db/models');
           const Product = db.Product;

           //select * from users => findAll

           exports.findAll=(req,res)=>{
            Product.findAll()
           .then(data=>res.json(data))
           .catch(err=>{
           res.status(500)
          .send({message:err.message || 'something want wrong'})
           });
          };

        // 2. seelct * from users where id=?=>findByPK

          exports.findByPk=(req,resp)=>{
          const id=parseInt(req.params.id);
          Product.findByPk(id)
         .then(data=>resp.json(data))
         .catch(err=>{
          resp.status(500)
             .send({message:err.message||
              `Something went wrong`})
         });
        };


       //insert into users (firstName,lastName,createdAt,updateAt) values(?,?,?,?) =>create(user)

        exports.create=(req,res)=>{
        if(!req.body.productName){
        res.status(400).send({
        message: "Content can not be empty!"
        });
          return;
        }

       const newProduct ={
        productName : req.body.productName,
        Description : req.body.Description,
        image : req.body.image,
        price : req.body.price,
        Category : req.body.Category,
        createdAt:new Date(),
        updatedAt:new Date()
      }

      Product.create(newProduct)
     .then(data=>res.json(data))
     .catch(err=>{
       res.status(500)
       .send({message:err.message || 'Something went wrong'});
      });
     };

     //update users set firstName=?, lastName=?,createdAt=?,updateAt=?

     exports.update=(req,res)=>{
     const id = req.params.id;
     Product.update(req.body, { where: { id: id } })
			.then(num => {
				if (num == 1) {
				res.send({
					message: `Product with id ${id} updated successfully.`
				});
				} else {
				res.send({
					message: `Cannot update Product with id=${id}. Maybe Product was not found or req.body is empty!`
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
       Product.destroy({ where: { id: id } })
      .then(num => {
      if (num == 1) {
        res.send({ message: `Product with id=${id} deleted successfully!` });
      } else {
        res.send({ message: `Cannot delete Product with id=${id}. Maybe User was not found!` });
      }
      })
      .catch((err) => {
      res.status(500).send({
        message: err.message || " Could not delete Product with id=" + id
      });
     });
    };