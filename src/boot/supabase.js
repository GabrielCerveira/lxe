import { createClient } from '@supabase/supabase-js'
import authUser from 'src/composables/AuthUser'

const supabaseUrl = 'https://ivedtqjvjsneeskvucfs.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2ZWR0cWp2anNuZWVza3Z1Y2ZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDgzOTk0NzcsImV4cCI6MTk2Mzk3NTQ3N30.JA2OHWkaG9_ltb1FV3QwUCpThmjwqgqEtPMpx35q_K8'
const supabase = createClient(supabaseUrl, supabaseKey)

supabase.auth.onAuthStateChange((event, session) => {
  const { user } = authUser()

  user.value = session?.user || null
})

export default function useSupabase () {
  return { supabase }
}
