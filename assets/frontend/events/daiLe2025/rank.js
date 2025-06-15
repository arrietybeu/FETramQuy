$.rank = function(url, usernameEncode, callback) {
    var getRankMe = function(rankData) {
        var rankMe = null;
        if(rankData && rankData.length > 0) {
            for(var i = 0; i< rankData.length; i++) {
                if(rankData[i].username == usernameEncode) {
                    rankMe = rankData[i];
                    break;
                }
            }
        }
        return rankMe;
    };
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        async: false,
        success: response => {
            if(response && response.length > 0) {
                var rankData = response;
                callback(rankData, getRankMe(rankData));
            }
        },
    });
};