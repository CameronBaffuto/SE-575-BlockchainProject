import React from 'react';

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
   {
       return <div className="list" key={item.key}>
     <p>
         <input type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/>
     </p>

    </div>})
    return <div>
        {listItems}
    </div>;
  }

  export default ListItems;
