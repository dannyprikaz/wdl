const playersRep = nodecg.Replicant('playersRep')
NodeCG.waitForReplicants(playersRep).then(() => {
  playersRep.value = (playersRep.value ? playersRep.value : [])
});
