
/**
 * This type defines a control panel that selects between the various types of
 * position markers, i.e. ruler, position markers, or nothing.
 */

define( function( require ) {
  'use strict';

  // Imports
  var HBox = require( 'SCENERY/nodes/HBox' );
  var HStrut = require( 'SUN/HStrut' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Panel = require( 'SUN/Panel' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Text = require( 'SCENERY/nodes/Text' );
  var VBox = require( 'SCENERY/nodes/VBox' );
  var VerticalAquaRadioButtonGroup = require( 'SUN/VerticalAquaRadioButtonGroup' );
  var VStrut = require( 'SUN/VStrut' );

  // Constants
  var PANEL_OPTION_FONT = { font: new PhetFont( 12 ) };
  var PANEL_TITLE_FONT = new PhetFont( 14 );

  // Strings
  var sfString = require( 'string!PULLEY/sf' );
  var smString = require( 'string!PULLEY/sm' );


  /**
   * @param {Property} positionIndicatorStateProperty
   * @param {Object} [options]
   * @constructor
   */
  function PulleyTypeControlPanel( pulleyTypeProperty, options ) {

    options = _.extend(
      {
        titleToControlsVerticalSpace: 5,
        minWidth: 0.1, // Can't be zero, so defaults to something small
        fill: 'rgb( 240, 240, 240 )',
        xMargin: 5
      }, options );

    var pulleyTypeRadioButtons = new VerticalAquaRadioButtonGroup( [
      { node: new Text( sfString, PANEL_OPTION_FONT ), property: pulleyTypeProperty, value: 'sf', label: sfString },
      { node: new Text( smString, PANEL_OPTION_FONT ), property: pulleyTypeProperty, value: 'sm', label: smString }
    ], { radius: 6 } );

    var pulleyTypeVBox = new VBox( {
      children: [
        new Text( 'Pulley System', PANEL_TITLE_FONT ),
        new VStrut( options.titleToControlsVerticalSpace ),
        new HStrut( Math.max( 0.1, options.minWidth - 2 * options.xMargin ) ),
        new HBox( { children: [ new HStrut( 10 ), pulleyTypeRadioButtons ] } )
      ],
      align: 'left'
    } );

    Panel.call( this, pulleyTypeVBox, options );
  }

  return inherit( Panel, PulleyTypeControlPanel );
} );

