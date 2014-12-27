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

  // specific modules

  /**
   * @param {SimluationModel}  model of the simulation
   * @constructor
   */


  var X_MARGIN=20;  
  var Y_MARGIN=20;


  function PulleyScreenView( model ) {

    var PulleyScreenView = this;
    ScreenView.call( PulleyScreenView);


	var skygroundx=this.layoutBounds.centerX;  // skygroundx- centerX of the boundary between sky and ground  
	var skygroundy=this.layoutBounds.centerY*1.2 ; // skygroundy- Y coordinate of the boundary between sky and ground  

	//background (sky & ground)
	PulleyScreenView.addChild( new OutsideBackgroundNode( skygroundx, skygroundy, this.layoutBounds.width*2, this.layoutBounds.height, this.layoutBounds.height) );

    }

  return inherit( ScreenView, PulleyScreenView );

} );


