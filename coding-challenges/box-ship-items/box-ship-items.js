
function separateItems(items) {
  return items.reduce((shipment, product, productIndex) => {
    if(product.toLowerCase() === "macbook" || product.toLowerCase() === "bluetooth speaker") {
        shipment.push(product);
        return shipment;
    }

    if(product.toLowerCase() === "cam" || product.toLowerCase() === "headphones") {
      if(shipment.includes(product)) {
        shipment[shipment.indexOf(product)] = [shipment[shipment.indexOf(product)], product] 
        return shipment;        
      }
      shipment.push(product);
      return shipment;        
    }
    return shipment; 
  }, []);
}

function packItems(items) {
  return items.map(box => {
    if(Array.isArray(box)) { 
      if(box.map(item => item.toLowerCase()).includes("cam") || box.map(item => item.toLowerCase()).includes( "headphones")) {
        return {boxSize: 'M', item: [...box]};
      }
    }
    if(box.toLowerCase() === "cam" || box.toLowerCase() === "headphones") {
      return {boxSize: 'M', item: [box]};
    }
    if(box.toLowerCase() === "macbook" || box.toLowerCase() === "bluetooth speaker") {
      return {boxSize: 'L', item: [box]};
    }
  });
}

module.exports = function(products) {
  return packItems(separateItems(products))
}