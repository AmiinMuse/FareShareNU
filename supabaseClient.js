import { createClient } from '@supabase/supabase-js'

const URL = 'https://simylclnylloghhypblc.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpbXlsY2xueWxsb2doaHlwYmxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE1ODYyNDksImV4cCI6MTk5NzE2MjI0OX0.1S94RCP45nXvagUF__FO8jsySDo3ejbmL4l486DI_9c'

export const supabase = createClient(URL, API_KEY);