
define( function( require ) {
  'use strict';

  // general modules

  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );

  // specific modules

  var PulleyNode = require( 'PULLEY/view/PulleyNode' );

  function PulleySystemNode( model, options ) {

    options = _.extend( {

    }, options );
    var pulleySystemNode=this;
    Node.call( pulleySystemNode );

    var pulleySet1, pulleySet2, WheelsPerPulley, PulleyPresent, items;

    function updateSystem()
    {
//	this.removeChild(pulleySet1);
//	this.removeChild(pulleySet2);

	items=pulleySystemNode.getChildren();
	for(var i=0;i<items.length;i++)
	{
//		items[i].detach();		
		pulleySystemNode.removeChild(items[i]);
	}

//	delete pulleySet1;
//	delete pulleySet2;

        switch (model.pulleyType) {
           case 'sf':
		WheelsPerPulley=1;              
		PulleyPresent='first';
		break;
           case 'sm':
		WheelsPerPulley=1;              
		PulleyPresent='second';
		break;
           case 'sc':
		WheelsPerPulley=1;              
		PulleyPresent='both';
		break;
           case 'dc':
		WheelsPerPulley=2;              
		PulleyPresent='both';
		break;
           case 'tc':
		WheelsPerPulley=3;              
		PulleyPresent='both';
		break;
           case 'qc':
		WheelsPerPulley=4;              
		PulleyPresent='both';
		break;
 	}
 
	switch( PulleyPresent ) {
           case 'first':
		pulleySet1=new PulleyNode(model, WheelsPerPulley, model.position1);
		pulleySystemNode.addChild( pulleySet1 );
		break;
           case 'second':
		pulleySet2=new PulleyNode(model, WheelsPerPulley, model.position2);
		pulleySystemNode.addChild( pulleySet2 );
		break;
           case 'both':
		pulleySet1=new PulleyNode(model, WheelsPerPulley, model.position1);
		pulleySet2=new PulleyNode(model, WheelsPerPulley, model.position2);
		pulleySystemNode.addChild( pulleySet1 );
		pulleySystemNode.addChild( pulleySet2 );
		break;
	}

    }

   model.pulleyTypeProperty.link( function() { updateSystem(); } );

  }

  return inherit( Node, PulleySystemNode );

} );


/*
     model.position1Property.link( function (){

        pulleyNode.translate(0,1);

     } );

*/



