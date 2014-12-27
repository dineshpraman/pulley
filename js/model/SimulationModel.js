/************************************************
*		Model for Simulation		*
*************************************************
*
* Defines simulation state variables
* Instantiates objects Truck, Mass
* Defines some functions 
* Defines the animation loop
*
* author: Dinesh
*/

define( function( require ) {
  'use strict';

  // general modules
  var PropertySet = require( 'AXON/PropertySet' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Vector2 = require( 'DOT/Vector2' );

  //specific modules

  function SimulationModel() {

    PropertySet.call( this, {
      state: 'bottom',   //4 states depending on the position of the carton - bottom, moving, top, completed
      running: false,   // true if sim is running, false if sim is not running
    } );
	}

  return inherit( PropertySet, SimulationModel, {
    // Resets all model elements
    reset: function() {
		PropertySet.prototype.reset.call( this );
    }

  } );

} );

/********** Simulation States *********************************************************

* bottom - carton is at the bottom of the inclined plane
* moving - carton is moving along the inclined plane
* top - carton has moved to the top, and is moving horizontally along the truck
* completed - carton stops at the top

****************************************************************************************/









