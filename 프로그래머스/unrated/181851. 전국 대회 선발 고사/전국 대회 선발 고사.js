function solution(rank, attendance) {
    const rankSet = rank.map((rankValue,rankIdx)=>({rankValue,rankIdx}))
                        .filter((_,idx)=>attendance[idx])

    rankSet.sort((a,b)=>a.rankValue - b.rankValue)
    const answer = rankSet[0].rankIdx * 10000 + rankSet[1].rankIdx * 100 + rankSet[2].rankIdx
    return answer;
}