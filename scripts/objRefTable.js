const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Plugins.Keyboard,
		C3.Behaviors.EightDir.Cnds.IsMoving,
		C3.Plugins.Sprite.Acts.SetAnimSpeed,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Sprite.Cnds.CompareFrame,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetAnim
	];
};
self.C3_JsPropNameTable = [
	{direcao: 0},
	{"8Direções": 0},
	{Sprite: 0},
	{Teclado: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {}
}