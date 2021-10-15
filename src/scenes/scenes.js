export const ScenesEnums = {
	Items: 'items',
	ItemsID: 'itemsId',
}

export const scenes = {
    [ScenesEnums.Items]: {
		pattern: '/items',
		url: '/items',
	},
	[ScenesEnums.ItemsID]: {
		pattern: '/items/:id',
		url: '/items',
	},
}