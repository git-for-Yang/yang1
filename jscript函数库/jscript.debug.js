
//创建jscript.debug调试包,包含一些调试js的代码



if (typeof jscript == 'undefined') {
  jscript = function() { }
}
jscript.debug = function() { }



//jscript.debug.enumProps如何显示任意一个对象的所有属性以及他们的值。for...in循环遍历inObj的属性。用alert来输出调试。
jscript.debug.enumProps = function(inObj) {
  var props = "";
  var i;
  for (i in inObj) {
    props += i + " = " + inObj[i] + "\n";
  }
  alert(props);
} 


//jscript.debug.DivLogger实现一个健壮的自动记录日志机制，基于严重级别来记录（或者不记录）日志的日志系统
jscript.debug.DivLogger = function() {
	
  /**
   * The following are faux constants that define the various levels a log
   * instance can be set to output.
   */
  this.LEVEL_TRACE = 1;
  this.LEVEL_DEBUG = 2;
  this.LEVEL_INFO  = 3;
  this.LEVEL_WARN  = 4;
  this.LEVEL_ERROR = 5;
  this.LEVEL_FATAL = 6;


  /**
   * These are the font colors for each logging level.
   */
  this.LEVEL_TRACE_COLOR = "a0a000";
  this.LEVEL_DEBUG_COLOR = "64c864";
  this.LEVEL_INFO_COLOR  = "000000";
  this.LEVEL_WARN_COLOR  = "0000ff";
  this.LEVEL_ERROR_COLOR = "ff8c00";
  this.LEVEL_FATAL_COLOR = "ff0000";


  /**
   * logLevel determines the minimum message level the instance will show.
   */
  this.logLevel = 3;


  /**
   * targetDIV is the DIV object to output to.
   */
  this.targetDiv = null;


  /**
   * This function is used to set the minimum level a log instance will show.
   *
   * @param inLevel One of the level constants.  Any message at this level
   *                or a higher level will be displayed, others will not.
   */
  this.setLevel = function(inLevel) {
    this.logLevel = inLevel;
  } 


  /**
   * This function is used to set the target DIV that all messages are
   * written to.  Note that when you call this, the DIV's existing contents
   * are cleared out.
   *
   * @param inTargetDiv The DIV object that all messages are written to.
   */
  this.setTargetDiv = function(inTargetDiv) {
    this.targetDiv = inTargetDiv;
    this.targetDiv.innerHTML = "";
  } 


  /**
   * This function is called to determine if a particular message meets or
   * exceeds the current level of the log instance and should therefore be
   * logged.
   *
   * @param inLevel The level of the message being checked.
   */
  this.shouldBeLogged = function(inLevel) {
    if (inLevel >= this.logLevel) {
      return true;
    } else {
      return false;
    }
  } 


  /**
   * This function logs messages at TRACE level.
   *
   * @param inMessage The message to log.
   */
  this.trace = function(inMessage) {
    if (this.shouldBeLogged(this.LEVEL_TRACE) && this.targetDiv) {
      this.targetDiv.innerHTML +=
      "<div style='color:#" + this.LEVEL_TRACE_COLOR + ";'>" +
      "[TRACE] " + inMessage + "</div>";
    }
  } 


  /**
   * This function logs messages at DEBUG level.
   *
   * @param inMessage The message to log.
   */
  this.debug = function(inMessage) {
    if (this.shouldBeLogged(this.LEVEL_DEBUG) && this.targetDiv) {
      this.targetDiv.innerHTML +=
      "<div style='color:#" + this.LEVEL_DEBUG_COLOR + ";'>" +
      "[DEBUG] " + inMessage + "</div>";
    }
  } 


  /**
   * This function logs messages at INFO level.
   *
   * @param inMessage The message to log.
   */
  this.info = function(inMessage) {
    if (this.shouldBeLogged(this.LEVEL_INFO) && this.targetDiv) {
      this.targetDiv.innerHTML +=
      "<div style='color:#" + this.LEVEL_INFO_COLOR + ";'>" +
      "[INFO] " + inMessage + "</div>";
    }
  } 


  /**
   * This function logs messages at WARN level.
   *
   * @param inMessage The message to log.
   */
  this.warn = function(inMessage) {
    if (this.shouldBeLogged(this.LEVEL_WARN) && this.targetDiv) {
      this.targetDiv.innerHTML +=
      "<div style='color:#" + this.LEVEL_WARN_COLOR + ";'>" +
      "[WARN] " + inMessage + "</div>";
    }
  } 


  /**
   * This function logs messages at ERROR level.
   *
   * @param inMessage The message to log.
   */
  this.error = function(inMessage) {
    if (this.shouldBeLogged(this.LEVEL_ERROR) && this.targetDiv) {
      this.targetDiv.innerHTML +=
      "<div style='color:#" + this.LEVEL_ERROR_COLOR + ";'>" +
      "[ERROR] " + inMessage + "</div>";
    }
  } 


  /**
   * This function logs messages at FATAL level.
   *
   * @param inMessage The message to log.
   */
  this.fatal = function(inMessage) {
    if (this.shouldBeLogged(this.LEVEL_FATAL) && this.targetDiv) {
      this.targetDiv.innerHTML +=
      "<div style='color:#" + this.LEVEL_FATAL_COLOR + ";'>" +
      "[FATAL] " + inMessage + "</div>";
    }
  } 
}
