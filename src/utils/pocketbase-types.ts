/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Lunette = "LUNETTE",
	MateriauMonture = "MATERIAU_MONTURE",
	MateriauVerre = "MATERIAU_VERRE",
	TaillePont = "TAILLE_PONT",
	TailleVerre = "TAILLE_VERRE",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

type ExpandType<T> = unknown extends T
	? T extends unknown
		? { expand?: unknown }
		: { expand: T }
	: { expand: T }

// System fields
export type BaseSystemFields<T = unknown> = {
	id: RecordIdString
	collectionId: string
	collectionName: Collections
} & ExpandType<T>

export type AuthSystemFields<T = unknown> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type UsersRecord = {
	nom: string
	email: string
	password: string
	id: string
	emailVisibility?: boolean
	verified?: boolean
	tokenKey: string
	created?: IsoDateString
	updated?: IsoDateString
}

export type LunetteRecord = {
	id: string
	nom_couleur: string
	materiau_monture: string
	materiau_verre: string
	taille_pont: string
	taille_verre: string
	created?: IsoDateString
	updated?: IsoDateString
}

export type MateriauMontureRecord = {
	id: string
	libelle: string
	created?: IsoDateString
	updated?: IsoDateString
}

export type MateriauVerreRecord = {
	id: string
	libelle: string
	created?: IsoDateString
	updated?: IsoDateString
}

export type TaillePontRecord = {
	id: string
	mesure: string
	created?: IsoDateString
	updated?: IsoDateString
}

export type TailleVerreRecord = {
	id: string
	mesure: string
	created?: IsoDateString
	updated?: IsoDateString
}

// Response types include system fields and match responses from the PocketBase API
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>
export type LunetteResponse<Texpand = unknown> = Required<LunetteRecord> & BaseSystemFields<Texpand>
export type MateriauMontureResponse<Texpand = unknown> = Required<MateriauMontureRecord> & BaseSystemFields<Texpand>
export type MateriauVerreResponse<Texpand = unknown> = Required<MateriauVerreRecord> & BaseSystemFields<Texpand>
export type TaillePontResponse<Texpand = unknown> = Required<TaillePontRecord> & BaseSystemFields<Texpand>
export type TailleVerreResponse<Texpand = unknown> = Required<TailleVerreRecord> & BaseSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	users: UsersRecord
	LUNETTE: LunetteRecord
	MATERIAU_MONTURE: MateriauMontureRecord
	MATERIAU_VERRE: MateriauVerreRecord
	TAILLE_PONT: TaillePontRecord
	TAILLE_VERRE: TailleVerreRecord
}

export type CollectionResponses = {
	users: UsersResponse
	LUNETTE: LunetteResponse
	MATERIAU_MONTURE: MateriauMontureResponse
	MATERIAU_VERRE: MateriauVerreResponse
	TAILLE_PONT: TaillePontResponse
	TAILLE_VERRE: TailleVerreResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'users'): RecordService<UsersResponse>
	collection(idOrName: 'LUNETTE'): RecordService<LunetteResponse>
	collection(idOrName: 'MATERIAU_MONTURE'): RecordService<MateriauMontureResponse>
	collection(idOrName: 'MATERIAU_VERRE'): RecordService<MateriauVerreResponse>
	collection(idOrName: 'TAILLE_PONT'): RecordService<TaillePontResponse>
	collection(idOrName: 'TAILLE_VERRE'): RecordService<TailleVerreResponse>
}
