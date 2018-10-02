const playersRep = nodecg.Replicant('playersRep');
const activeRolesRep = nodecg.Replicant('activeRolesRep');
NodeCG.waitForReplicants(playersRep, activeRolesRep).then(() => {
  playersRep.value = (playersRep.value ? playersRep.value : {})
  activeRolesRep.value = (activeRolesRep.value ? activeRolesRep.value : [])
});
const onuwRoles = [
  'Werewolf1', 'Werewolf2', 'Villager1', 'Villager2', 'Villager3', 'Seer', 'Robber',
  'Troublemaker', 'Tanner', 'Drunk', 'Hunter', 'Mason1', 'Mason2', 'Insomniac',
  'Minion', 'Doppelganger'
];
