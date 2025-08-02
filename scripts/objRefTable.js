const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.EightDir,
		C3.Behaviors.Bullet,
		C3.Behaviors.destroy,
		C3.Plugins.Text,
		C3.Plugins.TiledBg,
		C3.Plugins.Audio,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Acts.SetDefaultColor,
		C3.Plugins.System.Exps.rgbex,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Behaviors.EightDir.Cnds.IsMoving,
		C3.Behaviors.Bullet.Acts.SetEnabled,
		C3.Plugins.Sprite.Cnds.OnDestroyed,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.System.Cnds.OnLayoutStart
	];
};
self.C3_JsPropNameTable = [
	{Solid: 0},
	{"8Direction": 0},
	{paddle: 0},
	{Bullet: 0},
	{DestroyOutsideLayout: 0},
	{ball: 0},
	{brick: 0},
	{score: 0},
	{wall: 0},
	{Sprite: 0},
	{TiledBackground: 0},
	{Text: 0},
	{Audio: 0},
	{x: 0},
	{y: 0},
	{Score: 0}
];

self.InstanceType = {
	paddle: class extends self.ISpriteInstance {},
	ball: class extends self.ISpriteInstance {},
	brick: class extends self.ISpriteInstance {},
	score: class extends self.ITextInstance {},
	wall: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Text: class extends self.ITextInstance {},
	Audio: class extends self.IInstance {}
}