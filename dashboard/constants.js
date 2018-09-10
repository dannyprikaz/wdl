const playersRep = nodecg.Replicant('playersRep')
NodeCG.waitForReplicants(playersRep).then(() => {
  playersRep.value = (playersRep.value ? playersRep.value : {})
});
const onuwRoles = [
  'Werewolf1', 'Werewolf2', 'Villager1', 'Villager2', 'Villager3', 'Seer', 'Robber',
  'Troublemaker', 'Tanner', 'Drunk', 'Hunter', 'Mason1', 'Mason2', 'Insomniac',
  'Minion', 'Doppelganger'
]
