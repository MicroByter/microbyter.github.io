
/**
 * Provides suggestions for state names (USA).
 * @class
 * @scope public
 */
function StateSuggestions() {
    this.states = [
"ANCHORAGE",
"ATHENS",
"BANGKOK",
"BEIJING",
"BEIRUT",
"BRUSSELS",
"CAIRO",
"DALLAS",
"HONOLULU",
"LONDON",
"LOS ANGELES",
"MADRID",
"MANILA",
"MOSCOW",
"NEW DELHI",
"OSLO",
"PARIS",
"RIYADH",
"SEOUL",
"SINGAPORE",
"SYDNEY",
"TOKYO",
"VATICAN CITY",
"WASHINGTON DC",
"ZURICH",
"anchorage",
"athens",
"bangkok",
"beijing",
"beirut",
"brussels",
"cairo",
"dallas",
"honolulu",
"london",
"los angeles",
"madrid",
"manila",
"moscow",
"new delhi",
"oslo",
"paris",
"riyadh",
"seoul",
"singapore",
"sydney",
"tokyo",
"vatican city",
"washington dc",
"zurich"
    ];
}

/**
 * Request suggestions for the given autosuggest control. 
 * @scope protected
 * @param oAutoSuggestControl The autosuggest control to provide suggestions for.
 */
StateSuggestions.prototype.requestSuggestions = function (oAutoSuggestControl /*:AutoSuggestControl*/,
                                                          bTypeAhead /*:boolean*/) {
    var aSuggestions = [];
    var sTextboxValue = oAutoSuggestControl.textbox.value;
    
    if (sTextboxValue.length > 0){
    
        //search for matching states
        for (var i=0; i < this.states.length; i++) { 
            if (this.states[i].indexOf(sTextboxValue) == 0) {
                aSuggestions.push(this.states[i]);
            } 
        }
    }

    //provide suggestions to the control
    oAutoSuggestControl.autosuggest(aSuggestions, bTypeAhead);
};