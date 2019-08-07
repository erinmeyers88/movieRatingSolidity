pragma solidity ^0.4.17;

contract Rating {

    mapping(bytes32 => uint8) public ratingsReceived;

    bytes32[] public movieList;

    constructor(bytes32[] movieNames) public {
        movieList = movieNames;
    }

    function getMovies() view public returns (bytes32[]) {
        bytes32[] memory list;
        for (uint i = 0; i <= movieList.length; i++) {
            list[i] = movieList[i];
        }
        return list;
    }

    function totalVotesFor(bytes32 movie) view public returns (uint8) {
        return ratingsReceived[movie];
    }

    function voteForMovie(bytes32 movie) public {
        ratingsReceived[movie] += 1;
    }
}