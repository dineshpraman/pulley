/*
*********************************************************
*		View for the Pulley Screen		*
*********************************************************
* Instantiates all nodes to be placed in the screen
*
* author:Dinesh
*/
define( function( require ) {
  'use strict';

  // general modules
  var inherit = require( 'PHET_CORE/inherit' );
  var PropertySet = require( 'AXON/PropertySet' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var Vector2 = require( 'DOT/Vector2' );
  var OutsideBackgroundNode = require( 'SCENERY_PHET/OutsideBackgroundNode' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Range = require( 'DOT/Range' );


  // specific modules
  var ControlSlider = require( 'PULLEY/view/ControlSlider' );
  var PulleyTypeControlPanel = require( 'PULLEY/view/PulleyTypeControlPanel' );
  var PulleySystemNode = require( 'PULLEY/view/PulleySystemNode' );

  /**
   * @param {SimluationModel}  model of the simulation
   * @constructor
   */


  var X_MARGIN=20;  
  var Y_MARGIN=20;


  function PulleyScreenView( model ) {

    var pulleyScreenView = this;
    ScreenView.call( pulleyScreenView );


	var skygroundx=this.layoutBounds.centerX;  // skygroundx- centerX of the boundary between sky and ground  
	var skygroundy=this.layoutBounds.centerY*1.2 ; // skygroundy- Y coordinate of the boundary between sky and ground  

	//background (sky & ground)
	pulleyScreenView.addChild( new OutsideBackgroundNode( skygroundx, skygroundy, this.layoutBounds.width*2, this.layoutBounds.height, this.layoutBounds.height) );

        this.addChild(new PulleySystemNode(model));

	var DiameterSlider= new ControlSlider('Pulley Diameter', 'px', model.diameterProperty, new Range( 75, 100, 75 ), { decimals:0 } );

	this.addChild(DiameterSlider);
	DiameterSlider.scale(0.55);
	DiameterSlider.top=100;
	DiameterSlider.left=300;

        var pulleyTypeNode=new PulleyTypeControlPanel(model.pulleyTypeProperty);
	this.addChild(pulleyTypeNode);

    }

  return inherit( ScreenView, PulleyScreenView );

} );


