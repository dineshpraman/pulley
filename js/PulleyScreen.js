
/**
 * The 'Simulation' screen. Conforms to the contract specified in joist/Screen.
 *
 */

define( function( require ) {
  'use strict';

  // modules

  var SimulationModel = require( 'PULLEY/model/SimulationModel' );
  var PulleyScreenView = require( 'PULLEY/view/PulleyScreenView' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Screen = require( 'JOIST/Screen' );

  // strings
  var exampleSimString = require( 'string!PULLEY/example-sim.name' );

  /**
   * Creates the model and view for the ExampleScreen
   * @constructor
   */

  function PulleyScreen() {

    Screen.call( this, exampleSimString, null , //no icon, single screen sim
      function() { return new SimulationModel(); },
      function( model ) { return new PulleyScreenView( model );} 
    );

  }

  return inherit( Screen, PulleyScreen );

} );



