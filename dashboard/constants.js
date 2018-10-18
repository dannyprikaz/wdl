const playersRep = nodecg.Replicant('playersRep');
const activeRolesRep = nodecg.Replicant('activeRolesRep');
const middleRolesRep = nodecg.Replicant('middleRolesRep');
const countdownRep = nodecg.Replicant('countdownRep');
const safeToSet = NodeCG.waitForReplicants(
  playersRep, activeRolesRep, middleRolesRep, countdownRep
);
const streamStartMessage = 'The stream will begin shortly.'
safeToSet.then(() => {
  playersRep.value = (playersRep.value ? playersRep.value : {});
  activeRolesRep.value = (activeRolesRep.value ? activeRolesRep.value : []);
  middleRolesRep.value = (middleRolesRep.value ? middleRolesRep.value : []);
  countdownRep.value = streamStartMessage;
});
const onuwRoles = [
  'Werewolf1', 'Werewolf2', 'Villager1', 'Villager2', 'Villager3', 'Seer',
  'Robber', 'Troublemaker', 'Tanner', 'Drunk', 'Hunter', 'Mason1', 'Mason2',
  'Insomniac', 'Minion', 'Doppelganger'
];
