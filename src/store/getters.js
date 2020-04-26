const BrandNames=(state)=>{
return _.uniqBy(state.allBrands, 'brand');

}
// const ProductNames=(state)=>{
//    return _.uniqBy(state.allBrands, 'product_type');
    
//   }
//   const AllProducts=(state)=>(productName)=>{
//    return state.allBrands.filter((product)=>{
//       return product.product_type===productName? productName:null;
      
//    });
//   }
const selectBrand=(state)=>(brandName)=>{
    return state.allBrands.filter((brand)=>{
       return brand.brand===brandName? brand:null;
       
    });
}

const selectProductType=(state,getters)=>(type,brandName)=>{
   return getters.selectBrand(brandName).filter((product)=>{
      return product.product_type===type? product:null;
      
   });
}
const selectId=(state,getters)=>(id,type,brandName)=>{
   const variable=getters.selectProductType(type,brandName).find(product=>product.id===id);
   console.log(variable)
   return variable;
}
export default{
   BrandNames,
   // ProductNames,
   // AllProducts,
   selectBrand,
   selectId,
   selectProductType
}
import _ from 'lodash'