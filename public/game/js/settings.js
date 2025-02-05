var CANVAS_WIDTH = 640;
var CANVAS_HEIGHT = 960;

var CANVAS_WIDTH_HALF = CANVAS_WIDTH * 0.5;
var CANVAS_HEIGHT_HALF = CANVAS_HEIGHT * 0.5;

var EDGEBOARD_X = 20;
var EDGEBOARD_Y = 95;

var FPS = 30;

var FPS_TIME = 1 / FPS;
var DISABLE_SOUND_MOBILE = false;

var PRIMARY_FONT = "blackplotanregular";
var SECONDARY_FONT ="arial";

var STATE_LOADING = 0;
var STATE_MENU = 1;
var STATE_HELP = 1;
var STATE_GAME = 3;

var ON_MOUSE_DOWN = 0;
var ON_MOUSE_UP = 1;
var ON_MOUSE_OVER = 2;
var ON_MOUSE_OUT = 3;
var ON_DRAG_START = 4;
var ON_DRAG_END = 5;

var STROKE_DIMENSION = 17;
var STROKE_DIMENSION_MARKED = 7;

var MAX_NUM_OF_COL_AND_ROW = 11;

var SIZE_TEXT_CELL = 60;

var MAX_ITERATION_RANDOM_NUMBER = 1000;

var TEXT_COLOR = "#ffffff";

var TEXT_COLOR_2 = "#018def";

var SPAWN_WORDS_OFFSET_Y = -10;

var SHOW_SOLUTION = false;

var NUM_OF_LANGUAGE = 6;

var LANGUAGE_ID = ["english", "french", "german", "italian", "portoguese", "spanish"];

var COLOR_STROKE_MARKED = "rgba(255,0,0,0.7)";

var COLOR_STROKE = "rgba(92,190,248,0.5)";

var OFFSET_Y_GRID_LETTER = -125;

var OFFSET_Y_SPACE_WORDS_LIST = 7;

var NO_DIRECTION = -1;
var LEFT = 0;
var RIGHT = 1;
var UP = 2;
var DOWN = 3;
var UP_LEFT = 4;
var UP_RIGHT = 5;
var DOWN_LEFT = 6;
var DOWN_RIGHT = 7;
var ALL_DIRECTION = 8;

var CELL_SIZE = {width: 100, height: 100};

var TEXT_WORD_COLOR = "#2f2f2f";

var MAX_WORD_LENGTH = 9;

var GRID_AREA_SIZE = 525;
var START_X_GRID = (CANVAS_WIDTH - GRID_AREA_SIZE) / 2;
var START_Y_GRID = CANVAS_HEIGHT - 200;
var ENABLE_FULLSCREEN;
var ENABLE_CHECK_ORIENTATION;
var SOUNDTRACK_VOLUME_IN_GAME = 0.3;
var DEFAULT_LANG;
var DEFAULT_CAT;