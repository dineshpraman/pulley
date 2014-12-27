
/**
 * Main entry point for the sim.
 *
 */
define( function( require ) {
  'use strict';

  // modules
  var PulleyScreen = require( 'PULLEY/PulleyScreen' );
  var Sim = require( 'JOIST/Sim' );
  var SimLauncher = require( 'JOIST/SimLauncher' );

  // strings
  var simTitle = require( 'string!PULLEY/sim.name' );

  var simOptions = {
    credits: {
      // all credits fields are optional, see joist.AboutDialog
      leadDesign: 'Dinesh',
      softwareDevelopment: 'Dinesh',
      team: 'CoMPASS',
      qualityAssurance: 'No QA',
      graphicArts: 'PhET',
      thanks: 'Thanks to PhET!'
    }
  };

  // Appending '?dev' to the URL will enable developer-only features.
  if ( window.phetcommon.getQueryParameter( 'dev' ) ) {
    simOptions = _.extend( {
      // add dev-specific options here
    }, simOptions );
  }

  SimLauncher.launch( function() {
    var sim = new Sim( simTitle, [ new PulleyScreen() ], simOptions );
    sim.start();
  } );
} );
