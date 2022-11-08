#Plan
##HTML Elements
###input for adding new soldiers (with button)

### span for tracking defeated soldiers

###span for tracking zoro's HP
###Soldier List (div El)
##State
###array of soldiers (also with name and id)
###number of soldiers defeated
###zoro's HP
###current Id (to create new soldiers with an Id)
##Events
###every soldier is clickable ('click')
###on click: possibly decrement soldiers HP, possibly decrement zoro's HP, possibly increment number of soldiers defeated, update DOM with soldier/ zoro's HP and soldier defeated state
###new soldier form on submit
###make new soldier object
###add object to soldier array
###"update list display"
###clear out list dom
###loop through soldiers
###render new soldier element for each item
###apprend each el to the container el
##functions
###display soldiers
###clear out list and render soldier element
###renderSoldier(soldier)
###create soldier element for a specific soldier object
###soldierClickHandler
###take care of game logic in which soldiers are clicked
