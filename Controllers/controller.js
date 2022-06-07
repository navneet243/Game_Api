
const data = require('../Model/model')

const controller = {
    getOperator: async(req,res)=> {
        try{
            const operator = await data.aggregate([{$project: {operator:1,_id:0}}])
            let operators = []
            for(var i=0;i<operator.length;i++){
                operators[i] = operator[i].operator;
            }
            let set = [...new Set(operators)]
            res.status(200).json({"list of operator":set});
            // console.log(set);
        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },

    getOperatorgametype: async (req,res) =>{
        try{
            const gametype = await data.aggregate([{$project: {operatorGameType:1,_id:0}}])
            let gameType = []
            for(var i=0;i<gametype.length;i++){
                gameType[i] = gametype[i].operatorGameType;
            }
            let set = [...new Set(gameType)]
            res.status(200).json({"operatorGameType":set});
            //console.log(set);
        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },

    getOperatorName: async (req,res)=> {
        try{
            let operatorname = []
            const operatorQuery = req.query.operator
            const operatorgametypeQuery = req.query.operatorGameType
            const Operatorname = await data.find({
                operator: operatorQuery,
                operatorGameType: operatorgametypeQuery,
            },
            {
                operatorName: 1,
                _id: 0,
            })
            for(var i=0;i<Operatorname.length;i++){
                operatorname[i] = Operatorname[i].operatorName;
            }
            // if operator , operatorGameType are provided or not
            if(operatorQuery && operatorgametypeQuery){
                if(operatorname.length === 0)
                    res.status(200).json({"Operator Names":"No operatorName found"})
                else
                    res.status(200).json({"Operator Names":operatorname})
            }else 
                res.status(404).send("Provide valid Operator or OperatorGameType")
            //console.log(req.query);

        }catch(err){
            res.status(500).json({msg : err.message})
        }
    },

    getPlayers: async (req,res) => {
        try{
            let playerName = [] 
            const operatorQuery = req.query.operator
            const operatorgametypeQuery = req.query.operatorGameType
            const operatornameQuery = req.query.operatorName
            const player = await data.find({
                operator: operatorQuery,
                operatorGameType: operatorgametypeQuery,
                operatorName: operatornameQuery,
            },
            {
                dfsSlatePlayers: 1,
                _id:0,
            })
            for(var i=0;i<player.length;i++){
                //console.log(player[i])
                for(var j=0;j<player[i].dfsSlatePlayers.length;j++){
                    //console.log(player[i].dfsSlatePlayers[j]);
                    var playername = player[i].dfsSlatePlayers[j].operatorPlayerName;
                    playerName[j] = playername;
                }
            }
            // if operator , operatorGameType and operatorName are provided or not
            if(operatorQuery && operatorgametypeQuery && operatornameQuery){
                if(playerName.length === 0)
                    res.status(200).json({"playersName" : "No players found"})
                else
                    res.status(200).json({"playersName" :playerName})
            }else
                res.status(404).send("Provide valid operator or operatorGameType or operator name")
        }catch(err) { 
            res.status(500).json({msg : err.message})
        }
    },

    getbestPlayer: async (req,res) => {
        try{
            let playerName = []
            let maxpoints = 0 
            let index
            const operatorQuery = req.query.operator
            const operatorgametypeQuery = req.query.operatorGameType
            const operatornameQuery = req.query.operatorName
            const player = await data.find({
                operator: operatorQuery,
                operatorGameType: operatorgametypeQuery,
                operatorName: operatornameQuery,
            },
            {
                dfsSlatePlayers: 1,
                _id:0,
            })
            for(var i=0;i<player.length;i++){
                for(var j=0;j<player[i].dfsSlatePlayers.length;j++){
                    var points = player[i].dfsSlatePlayers[j].fantasyPoints;
                    var playername = player[i].dfsSlatePlayers[j].operatorPlayerName;
                    playerName[j] = playername
                    if(points > maxpoints){
                        maxpoints=points;
                        index = j
                    }
                }
            }
            // if operator , operatorGameType and operatorName are provided or not
            if(operatorQuery && operatorgametypeQuery && operatornameQuery){
                if(playerName.length===0)
                    res.status(200).json({"playersName" : "No best player found"})
                else
                    res.status(200).json({"playersName" :playerName[index]})
            }else
                res.status(404).send("provide valid operator or operatorGameType or operator name")
        }catch{
            res.status(500).json({msg : err.message})
        }
    },
}

module.exports = controller

