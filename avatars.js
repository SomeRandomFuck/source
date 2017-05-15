var avatar = ['base02', 'base04', 'base05', 'base06', 'base07', 'base08', 'base09', 'base11', 'base14', 'ba01', 'ba02', 'ba03', 'ba04', 'classic01', 'classic02', 'classic03', 'classic04', 'classic05', 'classic06', 'classic07', 'classic08', 'classic09', 'classic10', 'classic11', '2014winter-s07', 'dragon-e04', 'rave02', 'rave06', 'rave08', 'rave11', 'hiphop-s01', 'hiphop-s01', 'hiphop04', 'hiphop06', 'hiphop09', 'country02', 'country08', 'rock02', 'rock08', 'island-s01', 'island-s02', 'island-s03', 'island-s04', 'island-t03', 'diner-s01', 'sea-s01', 'sea-s02', 'sea-s03', 'sea-s04', 'sea-s05',  'sea-s06', 'sea-s07', 'sea-t04', '80s02', '80s11', 'robot-s01', 'robot-s01', 'robot02', 'robot06', 'robot09', 'robot14', 'zoo-s01', 'zoo-s02', 'zoo-s03', 'zoo-s04', 'zoo-s05', 'zoo-s06', 'zoo05', 'zoo07', 'warrior-s01', 'warrior-s02', 'warrior-s03', 'warrior-s04', 'warrior-s05', 'warrior-s06', 'warrior07', 'warrior08'];
API.on(API.CHAT, function(data){
    for (var i = 0; i < avatar.length; i++){
        if (data.message.indexOf("!avatar " + avatar[i]) == 0){
            $.ajax({
                type: 'PUT', 
                url: 'https://plug.dj/_/users/avatar', 
                contentType: 'application/json',
                data: '{"id": "' + avatar[i] + '"}'
            }).done(function(msg) {
                console.log(msg);
            });
            $.ajax({type: 'DELETE', url: '/_/chat/' + data.cid});
            break;
        };
    }
});