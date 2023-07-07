import { Injectable } from '@angular/core';
import {
  AuthSession,
  createClient,
  SupabaseClient,
} from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;
  _session: AuthSession | null = null;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
   }

   async getSensor() {
      return await this.supabase
      .from('sensor')
      .select('*');
   }

   async createSensor ( 
    newEntry: {
      macAddress: String;
      plant: String;
      name: String;
      alert: Number;
    }) {
      const { data, error } = await this.supabase
      .from('sensor')
      .insert(newEntry)
      .select();
      if (error) {
        console.log("Erreur de création de capteur", error);        
      }
   } 

}
