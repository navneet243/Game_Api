const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema(
    {
        season :{
            type: Number,
        },
        seasonType :{
            type: Number,
        },
        slateId :{
            type: Number,
        },
        week :{
            type: Number,
        },
        _lastUpdatedDate: {
            type : String,
        },
        dfsSlateGames :{
            type: Array,
        },
        dfsSlatePlayers : [
            {
                slatePlayerId :{
                    type: Number,
                },
                slateId :{
                    type: Number,
                },
                slateGameId :{
                    type: Number,
                },
                playerId :{
                    type: Number,
                },
                playerGameProjectionStatId:{
                    type: Number,
                },
                fantasyDefenseProjectionStatId: {
                    type: Number,
                },
                operatorPlayerId: {
                    type: String,
                },
                operatorSlatePlayerId :{
                    type:String,
                },
                operatorPlayerName :{
                    type: String,
                },
                operatorPosition : {
                    type : String
                },
                operatorSalary : {
                    type : Number,
                },
                team : {
                    type : Number,
                },
                teamId : {
                    type: Number,
                },
                removedByOperator: {
                    type: Boolean,
                },
                operatorRosterSlots: {
                    type: Array,
                },
                fantasyPoints: {
                    type : Number,
                },
                fantasyPointsPerDollar : {
                    type : Number,
                },
                projectedOwnership: {
                    type: Number,
                },
            }
        ],
        isMultiDaySlate :{
            type: Boolean,
        },
        numberOfGames :{
            type: Number,
        },
        operator :{
            type: String,
        },
        operatorDay :{
            type: Date,
        },
        operatorGameType : {
            type: String,
        },    
        operatorName : {
            type: String,
        },
        operatorSlateId : {
            type: Number,
        },
        operatorStartTime : {
            type: String,
        },
        removedByOperator : {
            type: Boolean,
        },
        salaryCap : {
            type: Number,
        },
        slateRosterSlots: {
            type: Array,
        },
        id: {
            type: String,
        },
    }
)

module.exports = mongoose.model('data',gameSchema);