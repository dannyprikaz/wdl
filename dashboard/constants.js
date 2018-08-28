const playersRep = nodecg.Replicant('playersRep')
NodeCG.waitForReplicants(playersRep).then(() => {
  playersRep.value = (playersRep.value ? playersRep.value : [])
});
const onuwRoles = [
  'Werewolf', 'Werewolf', 'Villager', 'Villager', 'Villager', 'Seer', 'Robber',
  'Troublemaker', 'Tanner', 'Drunk', 'Hunter', 'Mason', 'Mason', 'Insomniac',
  'Minion', 'Doppelganger'
]
