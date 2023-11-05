var icon="zeroth"
var i=0
var j=0
var trackArr=[]
var tempArr=[]
var playerName=''
var originalTable=document.getElementById("tictactable")
for(i=0;i<3;i++)
{
    for(j=0;j<3;j++)
    {
        tempArr.push('-')
    }
    trackArr.push(tempArr)
    tempArr=[]
}

function reset()
{
    location.reload()

}

//showIcon function helps in displaying the icon in the table based on rowid and colid
function showIcon(rowId,colId,icon)
{
    var elementToShowIcon=findElement(rowId,colId)
    elementToShowIcon[0].innerHTML='<img src="images/'+icon+'.png">'


}

//findElement function to find element based on rowid and colid
function findElement(rowId,colId)
{
    var allRowElement=document.querySelectorAll('tr')
    var elementToShowIcon=allRowElement[rowId].getElementsByClassName(colId)
    return elementToShowIcon

}

//iconExists function to check if the icon exists in the provided rowid and colid
function iconExists(rowId,colId)
{
    var element=findElement(rowId,colId)
    var iconExists=false
    if(element[0].childNodes!=null && element[0].childNodes.length>0)
    {
        if(element[0].childNodes[0].localName==="img")
        {
            iconExists=true
        }

    }
    return iconExists
}

function start(rowId,colId)
{
    if(!iconExists(rowId,colId))
    {
        showIcon(rowId,colId,icon)
        if(icon==="zeroth")
        {
            trackArr[rowId][Number(colId)]='0'
            icon="crossth"
        }
        else
        {
            trackArr[rowId][Number(colId)]='x'
            icon="zeroth"
        }
        if(gameOver())
        {
            document.querySelector("h3").innerHTML="Game Over !!!! It ended in draw, <button onclick='reset()'>click here</button> to start a new game"
            
            var newDrawImg=document.createElement('img')
            newDrawImg.setAttribute('src','images/gameover.png')
            newDrawImg.setAttribute('id','gameover_img')

            document.getElementById("tictactable").setAttribute("style","display:none")
            document.getElementById("table_container").appendChild(newDrawImg)

        }
        if(winner())
        {
            document.querySelector("h3").innerHTML="Congratulations!!! "+playerName+" has won, <button onclick='reset()'>click here</button> for a new game"

            var newWinImg=document.createElement('img')
            newWinImg.setAttribute('src','images/hooray.png')
            newWinImg.setAttribute('id','hooray_img')

            document.getElementById("tictactable").setAttribute("style","display:none")
            document.getElementById("table_container").appendChild(newWinImg)
            
        }
    }

}
function gameOver()
{
    var gameOver=true
    for(var i=0;i<3;i++)
    {
        for(var j=0;j<3;j++)
        {
            if(trackArr[i][j]=='-')
            {
                gameOver=false
            }

        }
    }
    return gameOver
}
function winner()
{
    var result1=false
    for(var i=0;i<3;i++)
    {
        if ((trackArr[i][0]=='0' || trackArr[i][0]=='x') && (trackArr[i][0]===trackArr[i][1]) && (trackArr[i][1]===trackArr[i][2]))
        {
            result1=true
            if(trackArr[i][0]=='0')
            {
                playerName="Player 1"
            }
            else
            {
                playerName="Player 2"
            }
            break
        }
    }
    /*var winningCondition1=((trackArr[0][0]=='0' || trackArr[0][0]=='x') && (trackArr[0][0]===trackArr[0][1]) && (trackArr[0][1]===trackArr[0][2]))
    var winningCondition2=((trackArr[1][0]=='0' || trackArr[1][0]=='x') && trackArr[1][0]===trackArr[1][1])&&(trackArr[1][1]===trackArr[1][2])
    var winningCondition3=((trackArr[2][0]=='0' || trackArr[2][0]=='x') && trackArr[2][0]===trackArr[2][1])&&(trackArr[2][1]===trackArr[2][2])*/

    var result2=false
    for(var i=0;i<3;i++)
    {
        if ((trackArr[0][i]=='0' || trackArr[0][i]=='x') && (trackArr[0][i]===trackArr[1][i]) && (trackArr[1][i]===trackArr[2][i]))
        {
            result2=true
            if(trackArr[0][i]=='0')
            {
                playerName="Player 1"
            }
            else
            {
                playerName="Player 2"
            }
            break
        }
    }
    /*var winningCondition4=((trackArr[0][0]=='0' || trackArr[0][0]=='x') && trackArr[0][0]===trackArr[1][0])&&(trackArr[1][0]===trackArr[2][0])
    var winningCondition5=((trackArr[0][1]=='0' || trackArr[0][1]=='x') && trackArr[0][1]===trackArr[1][1])&&(trackArr[1][1]===trackArr[2][1])
    var winningCondition6=((trackArr[0][2]=='0' || trackArr[0][2]=='x') && trackArr[0][2]===trackArr[1][2])&&(trackArr[1][2]===trackArr[2][2])*/


    var result3=((trackArr[0][0]=='0' || trackArr[0][0]=='x') && trackArr[0][0]===trackArr[1][1])&&(trackArr[1][1]===trackArr[2][2])
    if(result3==true && trackArr[0][0]=='0')
    {
        playerName="Player 1"

    }
    else if(result3==true && trackArr[0][0]=='x')
    {
        playerName="Player 2"
    }

    var result4=((trackArr[0][2]=='0' || trackArr[0][2]=='x') && trackArr[0][2]===trackArr[1][1])&&(trackArr[1][1]===trackArr[2][0])
    if(result4==true && trackArr[0][0]=='0')
    {
        playerName="Player 1"

    }
    else if(result4==true && trackArr[0][0]=='x')
    {
        playerName="Player 2"
    }

    if(result1||result2||result3||result4)
    {
        return true
    }
    else
    {
        return false
    }
}