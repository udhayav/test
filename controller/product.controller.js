const Product =  require('../models/product.model.js')

const getProduct = async (req, res) =>{
  try{
    const products =  await Product.find({})
    res.status(200).json(products)
 } catch(error){
   res.status(500).json({message: error.message})
 }
}

const getSingleProduct = async (req, res) =>{
  try{
    const {id} = req.params;
    const product = await Product.findById(id)
    res.status(200).json(product)

  }catch(error){
    res.status(500).json({message:error.message })
  }
}

const saveProduct = async (req, res) =>{
  try{
    const product =  await Product.create(req.body)
    res.status(200).json(product)
 
   }catch(error){
       res.status(500).json({messgae:error.message})
   }
}

const updateProduct = async (req, res)=>{
  try{
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body)
    
    if(!product){
      return res.status(400).json({message:"Product not found"})
    }

    const updateProduct =  await Product.findById(id)   
    res.status(200).json({message:"update successfully", data: updateProduct})
  }
  catch(error){
    res.status(500).json({message:error.message})
  }
}

const deleteProduct = async (req, res)=>{
  try{
    const {id} = req.params
    const product  = await Product.findByIdAndDelete(id);

    if(!product){
      return res.status(404).json({message:"prodict not found"})
    }
    res.status(200).json({message:'product deleted successfully'})

}catch(error){
  res.status(500).json({message:error.message})
}
}


module.exports = {
  getProduct,
  getSingleProduct,
  saveProduct,
  updateProduct,
  deleteProduct 
}