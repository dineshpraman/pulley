
define( function( require ) {
  'use strict';

  var Node = require( 'SCENERY/nodes/Node' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Circle = require( 'SCENERY/nodes/Circle' );
  var LinearGradient = require( 'SCENERY/util/LinearGradient' );
  var Path = require( 'SCENERY/nodes/Path' );
  var Shape = require( 'KITE/Shape' );
  var LinearFunction = require( 'DOT/LinearFunction' );

  function PulleyNode( model, N, position, options) {

    options = _.extend( {
      xMargin: 15,
      yMargin: 5,
      width:10,
      thickness:6,
      elevation:2,
    }, options );

    Node.call( this );
    var pulley_front_shape1, box_front_shape;
    var pulley_front_path1, box_front_path;

    var pulley_side_shape=[];
    var box_back_shape=[];
    var pulley_side_path=[];
    var box_back_path=[];
    var pulley_front_shape2=[];
    var pulley_front_path2=[];


    var pulley = new Node();

    var height = model.diameter;
    var width = options.width;
    var shift = height / 3;
    var x,y,t,e;

    var linearGradient1=[];

    for(var i=N-1;i>=0; i--)
    {

	box_back_path[i] = new Path( box_back_shape[i], {
	stroke: "#000",
	fill: "#444",
	lineWidth: 1
	} ) ;

	pulley_side_path[i] = new Path( pulley_side_shape[i], {
	stroke: "#000",
	fill: linearGradient1,
	lineWidth: 1
	} );

	pulley_front_path2[i] = new Path( pulley_front_shape2[i], {
	stroke: "#000",
	fill: "#d2d2d2",
	lineWidth: 1
	} );

	pulley.addChild( box_back_path[i] );
	pulley.addChild( pulley_side_path[i] );
	pulley.addChild( pulley_front_path2[i] );

    }

    pulley.addChild( pulley_front_path1 = new Path( pulley_front_shape1, {
      stroke: "#000",
      fill: "#d2d2d2",
      lineWidth: 1
    } ) );

    pulley.addChild( box_front_path = new Path( box_front_shape, {
      stroke: "#000",
      fill: "#444",
      lineWidth: 1
    } ) );

    this.addChild( pulley );


//#################################################################


    model.diameterProperty.link( function update() {

      height = model.diameter;
      width = options.width;
      width = model.diameter/10;
      shift = height / 3;
      x=position.x;
      y=position.y;

      t=options.thickness;
//      t=2+model.diameter/20;
      e=options.elevation;

//creates the basic shape of the pulley

      function basicShape(x,y) 
      {
	
      pulley_front_shape1=new Shape()
      .moveTo( x, y )
      .cubicCurveTo( -shift + x, y, -shift + x, height+y, x, height+y )
      .close();

      box_front_shape=new Shape()
      .moveTo( x-t, y-e -t )
      .lineTo( x+t, y+e - t)
      .lineTo(  x+t, y+ height+e + t)
      .lineTo(  x-t, y+ height-e + t)
      .close();

      }

      function addPulley(i,x,y)
      {

      pulley_side_shape[i]=new Shape()
      .moveTo( x, y )
      .cubicCurveTo( shift + x, y, shift + x, height+y, x, height+y )
      .lineTo( width + x , height+y )
      .cubicCurveTo( width + shift + x, height+y, width + shift + x, y, width + x, y )
      .close();

      pulley_front_shape2[i]=new Shape()
      .moveTo( x, y )
      .cubicCurveTo( shift + x, y, shift + x, height+y, x, height+y )
      .close();

      box_back_shape[i]=new Shape()
      .moveTo( x-t, y-e -t )
      .lineTo( x - t + 2*width, y - t -3 *e)
      .lineTo( x + t + 2*width, y - t -e )
      .lineTo( x + t , y +e -t )
      .close()
      .moveTo( x + t , y + e- t)	
      .lineTo( x + t + 2*width, y - e - t)	
      .lineTo( x + t + 2*width, y - e + t + height)	
      .lineTo( x + t , y + e + t + height)
      .close()
      .moveTo(x+t, y+height+e)
      .lineTo(x+t+2*width, y+height-e)
      .moveTo(x+t, y+e)
      .lineTo(x+t+2*width, y-e);

    linearGradient1[i] = new LinearGradient( x, y, x, y + height )
        .addColorStop( 0, "#e4e4e4" )
        .addColorStop( 0.2, "#FFF" )
        .addColorStop( 0.5, "#FFF" )
        .addColorStop( 0.81, "#bfbfbf" )
        .addColorStop( 1, "#575757" );
     }

     basicShape(x,y);
/*
     for( var i=0;i<N;i++)
      {
	addPulley(i,x+2*width*i,y-2*e*i);
      }
*/

      addPulley(0,x,y);
      addPulley(1,x+2*width,y-2*e);

      pulley_front_path1.shape = pulley_front_shape1;
      box_front_path.shape = box_front_shape;

     for( var i=0;i<N; i++)
     {
      pulley_side_path[i].shape = pulley_side_shape[i];
      pulley_front_path2[i].shape = pulley_front_shape2[i];
      box_back_path[i].shape = box_back_shape[i];
      pulley_side_path[i].fill=linearGradient1[i];
     }


   } );
   
  }

  inherit( Node, PulleyNode );
  return PulleyNode;

} );


