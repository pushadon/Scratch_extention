(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {
    };

    // Status reporting code
    // Return any message to be displayed as a tooltip.
    // Status values: 0 = error (red), 1 = warning (yellow), 2 = ready (green)
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    // For information on writing Scratch extensions, see the ScratchX wiki:
    // https://github.com/LLK/scratchx/wiki#writing-extensions-for-scratchx
    ext.calendarSchedule = function() {
        // code to do something goes here
    };
	

	ext.start = function() {
		return true;
	};
	
	ext.say = function() {
	
	};

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
		    ['h', 'Toby start', 'start'],
            [' ', 'Calendar Schedule', 'calendarSchedule'],
			['', 'Toby Say %n ', 'say', 'Hello, I am Toby']

        ],
        url: 'http://' // Link to extension documentation, homepage, etc.
    };

    // Register the extension
    ScratchExtensions.register('TobyCode', descriptor, ext);
})({});